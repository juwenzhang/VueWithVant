import {defineStore} from "pinia"
import {city} from "../../services/index.js"

const useCityStore = defineStore("city", {
    state: () => ({
        allCities: {},
        currentCity: "",
        start_time: "",
        end_time: "",
        long_time: 0
    }),

    getters: {

    },

    actions: {
        async fetchAllCitiesDataAction(state) {
            try {
                this.allCities = await city.getAllCityData()
            } catch (error) {
                console.error("Error fetching city data:", error)
            }
        }
    }
})

export default useCityStore