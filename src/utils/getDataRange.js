export function getDataRange(arr, standardData) {
    let currentIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i]
        if (value > standardData) {
            currentIndex = i - 1
            break
        }
    }
    if (currentIndex === -1) return
    return currentIndex
}