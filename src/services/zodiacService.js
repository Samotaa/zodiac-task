import axios from "axios";
import { useUserStore } from "../stores/UserStore";


const API_URL = `https://poker247tech.ru/get_horoscope/`;

export default {
    async getZodiac(zodiac) {
        try {
            const userStore = useUserStore();
            const language = userStore.languageCode === 'ru' ? "original" : "translated"
            const response = await axios.post(`${API_URL}`, { "sign": zodiac, language, "period": "today" });
            return response.data;
        } catch (error) {
            console.error("Failed to fetch zodiac", error);
            throw error;
        }
    },
};