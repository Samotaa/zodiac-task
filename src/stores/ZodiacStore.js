import { defineStore } from "pinia";
import zodiacService from "../services/zodiacService";

export const useZodiacStore = defineStore("zodiac", {
    state: () => ({
        zodiac: null,
    }),

    actions: {
        async getZodiac(zodiac) {
            await zodiacService
                .getZodiac(zodiac)
                .then((data) => {
                    this.zodiac = data.response;
                })
                .catch((error) => {
                    if (error.response && error.response.status === 404) {
                        this.zodiac = error.response.data.detail
                    } 
                });
        },
    },
});