import JWZRequestInstance from "../request/index.js"

export const getAllCityData = () => {
    return JWZRequestInstance.get({
        url: "/city/all"
    })
}