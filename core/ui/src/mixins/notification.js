import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import NsToastNotification from "@/components/NsToastNotification";
import to from "await-to-js";

export default {
  name: "NotificationService",
  computed: {
    ...mapState(["notifications"]),
    ...mapGetters(["getNotificationById", "getTaskById"]),
  },
  methods: {
    ...mapActions([
      "createNotificationInStore",
      "updateNotificationInStore",
      "setTaskErrorToShowInStore",
      "setIsNotificationDrawerShownInStore",
    ]),
    createNotification(notification) {
      // fill missing attributes
      if (!notification.type) {
        notification.type = "info";
      }

      if (notification.read == undefined) {
        notification.read = false;
      }

      //// need to generate a unique id for notifications?
      const now = new Date();

      if (!notification.id) {
        notification.id = now.getTime().toString();
      }

      if (!notification.timestamp) {
        notification.timestamp = now;
      }

      // create notification in vuex store
      this.createNotificationInStore(notification);

      // show toast notification (if isHidden is false)
      if (!notification.isHidden) {
        this.showNotification(notification);
      }
    },
    showNotification(notification) {
      const toast = {
        component: NsToastNotification,
        props: {
          kind: notification.type,
          title: notification.title,
          description: notification.description,
          progress: notification.task ? notification.task.progress : null,
          isProgressShown: false,
          actionLabel: notification.actionLabel,
          action: notification.action,
          lowContrast: false,
          showCloseButton: true,
          id: notification.id,
        },
        listeners: {
          notificationAction: this.handleNotificationAction,
        },
      };

      let toastTimeout;

      if (
        notification.task &&
        !["completed", "aborted", "validation-failed"].includes(
          notification.task.status
        )
      ) {
        toastTimeout = 3000;
      } else {
        // standard timeout
        toastTimeout = 5000;
      }

      console.log("notification.id", notification.id); ////

      const toastId = this.$toast(toast, {
        timeout: toastTimeout,
      });

      console.log("toastId", toastId); ////
    },
    notificationExists(notification) {
      const notificationFound = this.notifications.find(
        (n) => n.id === notification.id
      );

      if (notificationFound) {
        return true;
      } else {
        return false;
      }
    },
    putNotification(notification) {
      if (this.notificationExists(notification)) {
        this.updateNotificationInStore(notification);
      } else {
        this.createNotification(notification);
      }
    },
    handleNotificationAction(notificationId) {
      console.log("handleNotificationAction", notificationId); ////

      const notification = this.getNotificationById(notificationId);

      console.log("notification", notification); ////

      switch (notification.action.type) {
        case "taskError":
          // show task error modal
          this.setTaskErrorToShowInStore(notification.task);
          break;
        case "changeRoute":
          // go to url

          console.log("navigating to", notification.action.url); ////

          this.$router.push(notification.action.url);
          break;
      }

      // hide notification drawer
      this.setIsNotificationDrawerShownInStore(false);
    },
    async handleProgressTaskMessage(taskPath, taskId, payload) {
      const [err, contextResponse] = await to(this.getTaskContext(taskPath));

      if (err) {
        console.error("error retrieving task info", err);
        return;
      }

      const taskStatus = payload.status;
      let taskResult;

      if (["completed", "aborted", "validation-failed"].includes(taskStatus)) {
        // get output and error
        const [err, statusResponse] = await to(this.getTaskStatus(taskPath));

        if (err) {
          const notification = {
            title: this.$t("error.cannot_retrieve_task_status"),
            description: this.getErrorMessage(err),
            type: "error",
          };
          this.createNotification(notification);
        }

        taskResult = statusResponse.data.data;

        if (taskStatus === "validation-failed") {
          // show validation errors
          this.$root.$emit("validationFailed", taskResult.output);
        }
      }

      const taskContext = contextResponse.data.data.context;

      console.log("taskContext", taskContext); ////

      // check if it's a root task or a subtask
      if (taskContext.parent) {
        // subtask

        const parentTask = this.getTaskById(taskContext.parent);

        // check if subTask has already been added to subTasks list
        const subTask = parentTask.subTasks.find(
          (subTask) => subTask.context.id === taskContext.id
        );

        if (!subTask) {
          // add subtask to subTasks list

          const subTask = {
            context: taskContext,
            status: taskStatus,
            progress: payload.progress,
            subTasks: [],
          };

          if (taskResult) {
            subTask.result = taskResult;
          }

          parentTask.subTasks.push(subTask);
        } else {
          // update subtask in subtasks list

          subTask.status = taskStatus;
          subTask.progress = payload.progress;

          if (taskResult) {
            subTask.result = taskResult;
          }
        }

        console.log("subtask status", taskStatus); ////
      } else {
        // root task

        console.log("ROOT TASK, PROGRESS", payload.progress); ////

        let notificationType;

        switch (taskStatus) {
          case "completed":
            notificationType = "success";
            break;
          case "aborted":
          case "validation-failed":
            notificationType = "error";
            break;
          default:
            notificationType = "info";
            break;
        }

        let notificationText = payload.description;

        if (taskStatus === "completed") {
          if (taskContext.action === "add-module") {
            // completed description for add-module
            notificationText = this.$t(
              "software_center.instance_installed_on_node",
              {
                instance: taskResult.output.module_id,
                node: taskContext.extra.node,
              }
            );
          } else {
            notificationText = this.$t("task.completed");
          }
        } else if (taskStatus === "aborted") {
          notificationText = this.$t("error.generic_error");
        } else if (taskStatus === "validation-failed") {
          notificationText = this.$t("error.validation_error");
        } else if (payload.description) {
          notificationText = payload.description;
        } else {
          notificationText = taskContext.extra
            ? taskContext.extra.description
            : "-";
        }

        // emit validationOk if validation is successful
        let taskValidated = false;
        const task = this.getTaskById(taskContext.id);

        if (task) {
          taskValidated = task.validated;

          if (
            (taskStatus === "running" || taskStatus === "completed") &&
            !task.validated
          ) {
            // validation is ok (e.g.: close the modal that created the task)
            this.$root.$emit(taskContext.action + "-validation-ok", task);
            taskValidated = true;
          }
        }

        const notification = {
          id: taskId,
          title: taskContext.extra ? taskContext.extra.title : "-",
          description: notificationText,
          type: notificationType,
          timestamp: payload.timestamp, ////
          isHidden: taskContext.extra && taskContext.extra.isNotificationHidden,
          task: {
            context: taskContext,
            status: taskStatus,
            progress: payload.progress,
            subTasks: [],
            validated: taskValidated,
          },
        };

        if (taskResult) {
          notification.task.result = taskResult;

          // emit an event so that the component that requested the task can handle the result
          this.$root.$emit(
            taskContext.action + "-completed",
            taskContext,
            taskResult
          );

          // set notification action
          let [actionLabel, action] = this.getActionParams(
            taskContext,
            taskStatus,
            taskResult
          );

          notification.actionLabel = actionLabel;
          notification.action = action;

          if (this.shouldShowNotification(notification, taskStatus)) {
            this.showNotification(notification);
          }
        }

        this.putNotification(notification);
      }
    },
    shouldShowNotification(notification, taskStatus) {
      // - show notification unless isNotificationHidden is true
      // - error notifications are shown even if isNotificationHidden is true
      // - show notification only if it already exists (to avoid showing duplicate notifications if it is new but already completed)
      return (
        (!notification.isHidden ||
          ["aborted", "validation-failed"].includes(taskStatus)) &&
        this.notificationExists(notification)
      );
    },
    getActionParams(taskContext, taskStatus, taskResult) {
      let [actionLabel, action] = ["", {}];

      console.log("taskResult", taskResult); ////

      if (taskStatus === "aborted" || taskStatus === "validation-failed") {
        // task error
        actionLabel = this.$t("common.details");
        action = { type: "taskError" };
      } else {
        // task completed successfully
        switch (taskContext.action) {
          case "add-module":
            actionLabel = this.$t("task.configure");
            action = {
              type: "changeRoute",
              url: `/apps/${taskResult.output.module_id}`,
              // url: `/apps/ns8-app?appInput=fromAction`, ////
            };
            break;
        }
      }

      console.log("returning actionLabel, action", actionLabel, action); ////

      return [actionLabel, action];
    },
  },
};
