import { onMounted, onUnmounted, ref, onActivated, onDeactivated } from 'vue'
import {JWZ_throttle} from "../../utils/JWZ_throttle.js"

export default function useElementScrollListenerHook(elementRef, action = 'scroll') {
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    const clientHeight = ref(0)
    const reachBottom = ref(false)

    // 节流函数，用于处理滚动事件
    const handleScroll = JWZ_throttle((event) => {
        scrollTop.value = event.target.scrollTop
        scrollHeight.value = event.target.scrollHeight
        clientHeight.value = event.target.clientHeight
        reachBottom.value = clientHeight.value + scrollTop.value >= scrollHeight.value
    }, 100)

    onMounted(() => {
        // 确保元素引用存在
        if (elementRef) {
            elementRef.value.addEventListener(action, handleScroll)
        }
    })

    onUnmounted(() => {
        if (elementRef) {
            elementRef.value.removeEventListener(action, handleScroll)
        }
    })

    onActivated(() => {
        if (elementRef) {
            elementRef.value.addEventListener(action, handleScroll)
            elementRef.value.scrollTo({
                top: scrollTop.value,
                behavior: "smooth"
            })
        }
    })

    onDeactivated(() => {
        if (elementRef) {
            elementRef.value.removeEventListener(action, handleScroll)
        }
    })

    return {
        reachBottom,
        scrollTop,
        scrollHeight,
        clientHeight
    }
}