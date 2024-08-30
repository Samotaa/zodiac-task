<script setup lang="ts">
import { Sign } from "../interfaces/SignInterface"
import { defineProps, computed,   } from "vue"

import { useZodiacStore } from "../stores/ZodiacStore"

const zodiacStore = useZodiacStore()
const zodiacDescription = computed(() => zodiacStore.zodiac) 

const props = defineProps<{
  isModal: boolean
  closeModal: () => void
  item: Sign
}>();

</script>

<template>
  <div v-if="isModal" class="modal">
    <div class="modal-content">
      <svg class="zodiac-icon-svg" :alt="props.item?.name" viewBox="0 0 24 24">
        <path :d="props.item?.icon"></path>
      </svg>
      <div class="sign-info">
        <div class="sign-name">{{ props.item?.name }}</div>
        <div class="sign-date">{{ props.item?.date }}</div>
        <div class="sign-description">{{ zodiacDescription }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.modal {
  display: flex;
  justify-content: center;
  align-items: center; 
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.modal-content {
  background-color: #fefefe;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}

.zodiac-icon-svg {
  width: 80px;
  height: 80px;
  margin-top: 40px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(7, 7, 7, 0.3);
  background-color: rgb(240, 240, 240);
}

.sign-info{
  margin-top: 20px;
}

.sign-name {
  font-size: 24px;
}

.sign-date{
  padding: 10px;
}

.sign-description{
  font-size: 18px;
  margin-top: 20px;
}

</style>
