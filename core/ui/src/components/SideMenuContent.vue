<template>
  <div>
    <cv-side-nav-items>
      <cv-side-nav-menu
        :title="$t('network.title')"
        :active="isLinkActive('/newtwork')"
      >
        <template v-slot:nav-icon><Network_220 /></template>
        <cv-side-nav-menu-item href="javascript:void(0)" active>
          Menu item
        </cv-side-nav-menu-item>
        <cv-side-nav-menu-item href="javascript:void(0)">
          Menu item
        </cv-side-nav-menu-item>
        <cv-side-nav-menu-item href="javascript:void(0)">
          Menu item
        </cv-side-nav-menu-item>
      </cv-side-nav-menu>
      <cv-side-nav-menu
        :title="$t('account_provider.title')"
        :active="isLinkActive('/account-provider')"
      >
        <template v-slot:nav-icon><Events20 /></template>
        <cv-side-nav-menu-item href="javascript:void(0)">
          Menu item
        </cv-side-nav-menu-item>
        <cv-side-nav-menu-item href="javascript:void(0)" aria-current="page">
          Menu item
        </cv-side-nav-menu-item>
        <cv-side-nav-menu-item href="javascript:void(0)">
          Menu item
        </cv-side-nav-menu-item>
      </cv-side-nav-menu>
      <cv-side-nav-link
        v-if="getUpdatesCount > 0"
        to="/software-center?view=updates"
        :active="isLinkActive('/software-center')"
      >
        <template v-slot:nav-icon><Application20 /></template>

        <div class="badge-container">
          <span>{{ $t("software_center.title") }}</span>
          <span class="yellow-badge right-badge"></span>
        </div>
      </cv-side-nav-link>
      <cv-side-nav-link
        v-else
        to="/software-center"
        :active="isLinkActive('/software-center')"
      >
        <template v-slot:nav-icon><Application20 /></template>
        <span>{{ $t("software_center.title") }}</span>
      </cv-side-nav-link>
      <cv-side-nav-link href="javascript:void(0)">
        <template v-slot:nav-icon><Save20 /></template>
        {{ $t("backup.title") }}
      </cv-side-nav-link>
      <cv-side-nav-link to="/logs" :active="isLinkActive('/logs')">
        <template v-slot:nav-icon><Catalog20 /></template>
        {{ $t("logs.title") }}
      </cv-side-nav-link>
      <cv-side-nav-link to="/settings" :active="isLinkActive('/settings')">
        <template v-slot:nav-icon><Settings20 /></template>
        {{ $t("settings.title") }}
      </cv-side-nav-link>
    </cv-side-nav-items>
  </div>
</template>

<script>
import Network_220 from "@carbon/icons-vue/es/network--2/20";
import Events20 from "@carbon/icons-vue/es/events/20";
import Save20 from "@carbon/icons-vue/es/save/20";
import Settings20 from "@carbon/icons-vue/es/settings/20";
import Catalog20 from "@carbon/icons-vue/es/catalog/20";
import Application20 from "@carbon/icons-vue/es/application/20";
import { mapGetters } from "vuex";

export default {
  name: "SideMenuContent",
  components: {
    Network_220,
    Events20,
    Save20,
    Catalog20,
    Settings20,
    Application20,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUpdatesCount"]),
  },
  methods: {
    isLinkActive(path) {
      return this.$route.path.includes(path);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/carbon-utils";
</style>
