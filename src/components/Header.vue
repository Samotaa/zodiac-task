<script setup>
import { useI18n } from "vue-i18n";

import { useUserStore } from "../stores/UserStore";
const userStore = useUserStore();

const props = defineProps({
  user: String,
});

const { t, locale } = useI18n();

const changeLocale = (newLocale) => {
  locale.value = newLocale;
  userStore.changeLanguageCode(newLocale);
};
</script>

<template>
  <div class="header">
    <p class="main-text">
      {{ t("greeting", { name: user?.firstName || "Guest" }) }}
    </p>
    <span class="button-group">
      <div
        class="button"
        :class="locale === 'ru' ? 'active' : 'disable'"
        @click="changeLocale('ru')"
      >
        RU
      </div>
      <div
        class="button"
        :class="locale === 'en' ? 'active' : 'disable'"
        @click="changeLocale('en')"
      >
        EN
      </div>
    </span>
  </div>
</template>

<style scoped>

.header {
  position: sticky;
  top: 0px;
  background-color: #e2e2e2f1;
  display: flex;
  padding: 15px;
  justify-content: space-between;
}

.main-text {
  font-size: 16px;
  color: #4e4e4e;
}

.button-group {
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 110px;
}

.button {
  width: 50px;
  height: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(7, 7, 7, 0.1);
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.active {
  color: rgb(255, 255, 255);
  background-color: #a09b9b;
}

.disable {
  background-color: #d3d3d3;
  color: rgb(160, 160, 160);
}
</style>
