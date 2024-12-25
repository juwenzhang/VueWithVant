import { defineStore } from "pinia"
import { home } from "../../services/index.js"

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggestData: [],
        categories: []
    }),

    getters: {

    },

    actions: {
        async fetchHotSuggestsData() {
            const res = await home.getHotSuggestsData()
            this.hotSuggestData = res?.data
        },

        async fetchCategoriesData(){
            const res = await home.getCategoriesData()
            this.categories = res?.data
        }
    }
})

export default useHomeStore;