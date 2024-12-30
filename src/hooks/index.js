import useWindowListenerHook from "./modules/useWindowListenerHook.js"
import useElementScrollListenerHook from "./modules/useElementListenerHook.js"

export function useScroll() {
    return { ...useWindowListenerHook(document.documentElement, window, "scroll") }
}

export function useElementScroll(ele) {
    return { ...useElementScrollListenerHook(ele) }
}