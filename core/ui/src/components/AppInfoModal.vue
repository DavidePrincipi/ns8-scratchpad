<template>
  <div v-if="app">
    <cv-modal
      size="default"
      :visible="isShown"
      @modal-hidden="$emit('close')"
      class="no-pad-modal"
    >
      <template slot="title">{{ $t("software_center.app_info") }}</template>
      <!-- v-if="isShown" is needed to reset modal scroll to top -->
      <template v-if="isShown" slot="content">
        <section>
          <div class="logo-and-name">
            <div class="app-logo">
              <img
                :src="
                  app.logo
                    ? app.logo
                    : require('@/assets/module_default_logo.png')
                "
                :alt="app.name + ' logo'"
              />
            </div>
            <div class="app-name">
              <h3>{{ app.name }}</h3>
            </div>
          </div>
        </section>
        <section v-if="app.screenshots.length">
          <div class="screenshots">
            <NsImageGallery :fullScreen="true" :images="app.screenshots" />
          </div>
        </section>
        <section>
          <div class="description">
            {{ getAppDescription(app) }}
          </div>
        </section>
        <section>
          <div>
            <span class="section-title"
              >{{
                $tc("software_center.categories", app.categories.length)
              }}:</span
            >
            {{ getAppCategories(app) }}
          </div>
        </section>
        <section>
          <div>
            <span class="section-title"
              >{{ $t("software_center.latest_version") }}:</span
            >
            {{ app.versions.length ? app.versions[0].tag : "-" }}
          </div>
        </section>
        <section>
          <div>
            <span class="section-title"
              >{{ $t("software_center.documentation") }}:
            </span>
            <cv-link :href="app.docs.documentation_url" target="_blank">
              {{ app.docs.documentation_url }}
            </cv-link>
          </div>
        </section>
        <section>
          <div>
            <span class="section-title"
              >{{ $t("software_center.bugs") }}:
            </span>
            <cv-link :href="app.docs.bug_url" target="_blank">
              {{ app.docs.bug_url }}
            </cv-link>
          </div>
        </section>
        <section>
          <div>
            <span class="section-title"
              >{{ $t("software_center.source_code") }}:
            </span>
            <cv-link :href="app.docs.code_url" target="_blank">
              {{ app.docs.code_url }}
            </cv-link>
          </div>
        </section>
        <section>
          <div>
            <span class="section-title"
              >{{ $t("software_center.source_package") }}:
            </span>
            {{ app.source }}
          </div>
        </section>
        <section>
          <div>
            <span class="section-title"
              >{{ $tc("software_center.authors", app.authors.length) }}:
            </span>
            <span v-if="app.authors.length == 1"
              >{{ app.authors[0].name }}
              <cv-link :href="'mailto:' + app.authors[0].email" target="_blank">
                {{ app.authors[0].email }}
              </cv-link>
            </span>
            <ul v-else>
              <li
                v-for="(author, index) in app.authors"
                :key="index"
                class="author"
              >
                {{ author.name }}
                <cv-link :href="'mailto:' + author.email" target="_blank">
                  {{ author.email }}
                </cv-link>
              </li>
            </ul>
          </div>
        </section>
      </template>
      <template slot="secondary-button">{{ $t("common.close") }}</template>
    </cv-modal>
  </div>
</template>

<script>
import ModuleService from "@/mixins/module";
import NsImageGallery from "../components/NsImageGallery";

export default {
  name: "AppInfoModal",
  components: { NsImageGallery },
  mixins: [ModuleService],
  props: {
    isShown: Boolean,
    app: { type: [Object, null] },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/carbon-utils";

.logo-and-name {
  display: flex;
  align-items: center;
  margin-top: $spacing-05;
  margin-bottom: $spacing-05;
}

.app-logo {
  width: 4rem;
  height: 4rem;
  margin-right: $spacing-05;
  flex-shrink: 0;
}

.app-logo img {
  width: 100%;
  height: 100%;
}

section {
  margin-bottom: $spacing-05;
}

.section-title {
  font-weight: bold;
}

.author {
  margin-left: $spacing-05;
}
</style>
