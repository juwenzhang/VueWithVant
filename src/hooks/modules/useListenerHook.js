import {onActivated, onDeactivated, onMounted, onUnmounted, ref} from "vue"
import { JWZ_throttle } from "../../utils/JWZ_throttle.js"

// 后面使用 ts 重构的时候，直接给参数指定类型即可，这里就用文档注释添加类型限制，哈哈哈！！！
/**
 * hook 函数
 * @param { Window } listenerObj
 * @param { HTMLElement } listenerEle
 * @param { String } action
 */
export default function useListenerHook(listenerEle, listenerObj= window ,
                                        action = "scroll") {
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    const clientHeight = ref(0)
    const reachBottom = ref(false)

    const Listener = JWZ_throttle(() => {
        // 这个反正我记不住一点  https://juejin.cn/post/7431854696245067785
        scrollTop.value = listenerEle.scrollTop  // 获取的是元素滚动了的高度
        scrollHeight.value = listenerEle.scrollHeight  // 获取的整个元素中可滚动元素的高度
        clientHeight.value = listenerEle.clientHeight  // 获取的是元素本身的高度
        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            reachBottom.value = true
        }
    }, 10, { immediate: false })

    onMounted(() => {
        listenerObj.addEventListener(action, Listener)
    })

    onActivated(() => {
        listenerObj.addEventListener(action, Listener)
    })

    onUnmounted(() => {
        listenerObj.removeEventListener(action, Listener)
    })

    onDeactivated(() => {
        listenerObj.removeEventListener(action, Listener)
    })

    return {
        scrollHeight,
        scrollTop,
        clientHeight,
        reachBottom
    }
}