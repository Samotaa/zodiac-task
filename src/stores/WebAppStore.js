import { initInitData } from '@telegram-apps/sdk';
import { defineStore } from "pinia";

export const useWebAppStore = defineStore("webApp", {
    state: () => ({
      webApp: initInitData(),
    }),
  
    actions: {

    },
  });