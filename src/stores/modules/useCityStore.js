import { defineStore } from "pinia"
import { city } from "../../services/index.js"

const useCityStore = defineStore("city", {
    state: () => ({
        allCities: {}
    }),

    getters: {

    },

    actions: {
        async fetchAllCitiesDataAction() {
            const res = await city.getAllCityData()
            this.state.allCities = res
        }
    }
})

export default useCityStore