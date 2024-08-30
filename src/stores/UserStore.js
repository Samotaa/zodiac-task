import { defineStore } from "pinia";
import { useWebAppStore } from "./WebAppStore";


export const useUserStore = defineStore("user", {
    state: () => ({
      user: null,
      languageCode: null,
    }),
  
    actions: {
      async getUser() {
        const { webApp } = useWebAppStore();
        this.user = webApp.initData.user
        this.languageCode = webApp.initData.user.languageCode

      },

      async changeLanguageCode(language) {
        this.languageCode = language

      },
    },
  });