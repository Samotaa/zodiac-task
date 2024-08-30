<script setup>
import Header from "./components/Header.vue"
import Modal from "./components/Modal.vue"
import List from "./components/List.vue"
import { ref, onMounted, onUnmounted, watch } from "vue"
import { useUserStore } from "../src/stores/UserStore"
import { useZodiacStore } from "../src/stores/ZodiacStore"
import { useI18n } from "vue-i18n"
import { storeToRefs } from "pinia"

const { t, locale } = useI18n()
const userStore = useUserStore()
const zodiacStore = useZodiacStore()
const { user, languageCode } = storeToRefs(userStore)

const isModal = ref(false)
const sign = ref(null)

onMounted(() => {
  userStore.getUser()
  locale.value = languageCode.value === "ru" ? "ru" : "en"
  Telegram.WebApp.ready()
  Telegram.WebApp.isVerticalSwipesEnabled = false

  let touchStartX = 0
  let touchEndX = 0

  const handleGesture = () => {
    if (touchEndX > touchStartX && isModal.value) { 
      isModal.value = false
      Telegram.WebApp.BackButton.hide()
    }
  };

  const onTouchStart = (e) => touchStartX = e.changedTouches[0].screenX
  const onTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleGesture()
  };

  document.addEventListener('touchstart', onTouchStart)
  document.addEventListener('touchend', onTouchEnd)

  onUnmounted(() => {
    document.removeEventListener('touchstart', onTouchStart)
    document.removeEventListener('touchend', onTouchEnd)
  })
})

watch(() => isModal.value, (newValue) => {
  if (newValue) {
    Telegram.WebApp.BackButton.show();
  } else {
    Telegram.WebApp.BackButton.hide();
  }
});

const getZodiac = (zodiac) => {
  isModal.value = true
  sign.value = zodiac
  zodiacStore.getZodiac(zodiac.postName)
};

Telegram.WebApp.onEvent("backButtonClicked", () => {
  if (isModal.value) {
    isModal.value = false
  }
});

const closeModal = () => {
  isModal.value = false
}

</script>

<template>
  <Header :user="user" />
  <div class="main-container">
    <div class="date">{{ t("date") }}</div>
    <List :getZodiac="getZodiac" />
    <Modal :isModal="isModal" :closeModal="closeModal" :item="sign" />
  </div>
</template>

<style scoped>

.zoriac-today-description {
  display: flex;
  color: #a09b9b;
  height: 200px;
  transition: transform 1s ease;
}

.date {
  color: #4e4e4e;
  font-size: 22px;
  margin-bottom: 20px;
}

/* General styles */
.main-container {
  padding: 10px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

/* Button group styles */
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
  transition: background-color 0.3s ease;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-group button {
  margin: 0 10px;
  padding: 10px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(7, 7, 7, 0.1);
  transition: background-color 0.3s ease;
}

.button-group button:hover {
  box-shadow: 0 2px 5px rgba(7, 7, 7, 0.1);
}

</style>
