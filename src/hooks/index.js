import useListenerHook from "./modules/useListenerHook.js"

export function useScroll() {
    return { ...useListenerHook(document.documentElement, window, "scroll") }
}