import JWZRequestInstance from "../request/index.js"

export function getCategoriesData() {
    return JWZRequestInstance.get({
        url: "/home/categories"
    })
}

export function getHotSuggestsData() {
    return JWZRequestInstance.get({
        url: "/home/hotSuggests"
    })
}

export function getHomeListData(page = 1) {
    return JWZRequestInstance.get({
        url: "/home/homeList",
        params: {
            page: page  // 根据我们的实际情况对翻页的数据进行一个具体的请求
        }
    })
}