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