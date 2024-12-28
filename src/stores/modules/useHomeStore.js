import { defineStore } from "pinia"
import { home } from "../../services/index.js"

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggestData: [],
        categories: [],
        homeList: [],
        currentPage: 0
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
        },

        async fetchHomeListData() {
            const res = await home.getHomeListData(this.currentPage)
            this.currentPage += 1
            this?.homeList.push(...res.data)  // 尽量解构，否则是二维数组
        }
    }
})

export default useHomeStore;