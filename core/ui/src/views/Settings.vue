<template>
  <div class="bx--grid bx--grid--full-width">
    <div class="bx--row">
      <div class="bx--col-lg-16 page-title">
        <h2>{{ $t("settings.title") }}</h2>
      </div>
    </div>
    <div class="bx--row">
      <div class="bx--col-md-4 bx--col-lg-4">
        <NsTile
          :light="true"
          class="content-tile"
          kind="clickable"
          @click="goToSettingsSoftwareRepository"
          :icon="Application20"
        >
          <h6>{{ $t("settings.sw_repositories") }}</h6>
        </NsTile>
      </div>
      <div class="bx--col-md-4 bx--col-lg-4">
        <NsTile
          :light="true"
          class="content-tile"
          kind="clickable"
          @click="actionClick"
          :icon="Application20"
        >
          <h6>Test ////</h6>
        </NsTile>
      </div>
      <div class="bx--col-md-4 bx--col-lg-4">
        <NsTile
          :light="true"
          class="content-tile"
          kind="clickable"
          @click="actionClick"
          :icon="Application20"
        >
          <h6>Test ////</h6>
        </NsTile>
      </div>
      <div class="bx--col-md-4 bx--col-lg-4">
        <NsTile
          :light="true"
          class="content-tile"
          kind="clickable"
          @click="actionClick"
          :icon="Application20"
        >
          <h6>Test ////</h6>
        </NsTile>
      </div>
      <div class="bx--col-md-2 bx--col-lg-4">
        <NsTile
          :light="true"
          class="content-tile"
          kind="clickable"
          @click="actionClick"
          :icon="Application20"
        >
          <h6>Test ////</h6>
        </NsTile>
      </div>
    </div>
  </div>
</template>

<script>
import TaskService from "@/mixins/task";
// import to from "await-to-js"; ////
import UtilService from "@/mixins/util";
import NsTile from "@/components/NsTile";
import IconService from "@/mixins/icon";
import QueryParamService from "@/mixins/queryParam";

let nethserver = window.nethserver;

export default {
  name: "Settings",
  components: { NsTile },
  mixins: [TaskService, UtilService, IconService, QueryParamService],
  data() {
    return {
      q: {
        view: "",
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log("beforeRouteEnter", to, from); ////
      nethserver.watchQueryData(vm);
      vm.queryParamsToData(vm, to.query);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate", to, from); ////
    this.queryParamsToData(this, to.query);
    next();
  },
  methods: {
    ////
    actionClick() {
      console.log("actionClick //// remove"); ////
    },
    goToSettingsSoftwareRepository() {
      this.$router.push("/settings/software-repository");
    },
  },
};
</script>
