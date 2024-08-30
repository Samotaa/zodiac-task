<script setup lang="ts">
import { defineProps, computed } from "vue";
import { useI18n } from "vue-i18n"
import { zodiacKeys } from '../zodiacs/zodiacs';

import {
  mdiZodiacAries,
  mdiZodiacTaurus,
  mdiZodiacGemini,
  mdiZodiacCancer,
  mdiZodiacLeo,
  mdiZodiacVirgo,
  mdiZodiacLibra,
  mdiZodiacScorpio,
  mdiZodiacSagittarius,
  mdiZodiacCapricorn,
  mdiZodiacAquarius,
  mdiZodiacPisces,
} from "@mdi/js";

const { t, locale } = useI18n()

const props = defineProps<{
  getZodiac: () => void;
}>();

const zodiacSigns = computed(() =>
  zodiacKeys.map((key) => ({
    postName: key,
    name: t(`zodiac.${key}.name`),
    date: t(`zodiac.${key}.date`),
    icon: {
      aries: mdiZodiacAries,
      taurus: mdiZodiacTaurus,
      gemini: mdiZodiacGemini,
      cancer: mdiZodiacCancer,
      leo: mdiZodiacLeo,
      virgo: mdiZodiacVirgo,
      libra: mdiZodiacLibra,
      scorpio: mdiZodiacScorpio,
      sagittarius: mdiZodiacSagittarius,
      capricorn: mdiZodiacCapricorn,
      aquarius: mdiZodiacAquarius,
      pisces: mdiZodiacPisces,
    }[key],
  }))
);

</script>

<template>
  <div class="zodiac-container">
    <div
      v-for="sign in zodiacSigns"
      class="zodiac-card"
      @click="getZodiac(sign)"
      :key="sign.name"
    >
      <div class="main-card">
        <div class="card-left-side">
          <div class="zodiac-icon">
            <svg class="zodiac-icon-svg" :alt="sign.name" viewBox="0 0 24 24">
              <path :d="sign.icon"></path>
            </svg>
          </div>
          <div class="zodiac-description">
            <span>{{ sign.name }}</span>
            <span>{{ sign.date }}</span>
          </div>
        </div>

        <span class="mdi mdi-access-point"></span>
        <div class="card-right-side">{{ t("open") }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

/* Zodiac container styles */
.zodiac-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.zodiac-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  background-color: #f9f9f9;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 90%;
  height: auto;
  box-shadow: 0 2px 5px rgba(7, 7, 7, 0.1);
  text-align: center;
  transition: transform 0.5s ease;
}

.main-card {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  text-align: center;
  transition: transform 0.3s ease;
}

.card-left-side {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-right-side {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a09b9b;
}

.zodiac-description {
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 14px;
  color: #a09b9b;
}

.zodiac-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  text-align: center;
}

.zodiac-icon-svg {
  width: 100%;
  height: 100%;
}

</style>
