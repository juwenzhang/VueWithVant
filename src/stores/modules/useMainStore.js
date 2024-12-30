import { defineStore } from "pinia"

const useMainStore = defineStore("mainStore", {
    state: () => ({
        token: "",
        startData: "",
        endData: ""
    }),

    getters: {

    },

    actions: {

    }
})

export default useMainStore