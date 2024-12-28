/**
 * 节流函数，需要使用直接 cv 即可
 * @param callback
 * @param interval
 * @param immediate
 * @param is_execute
 * @return {function(...[*]): Promise<unknown>}
 * @constructor
 */
export function JWZ_throttle(callback, interval = 3000,
                             {immediate = true, is_execute = false} = {}) {
    let start_time = 0
    let timer = null
    const _throttle = function (...args) {
        return new Promise((resolve, reject) => {
            try {
                const now_time = new Date().getTime()

                // 开始决定是否需要进行立即执行
                // 下面的情况表示的就是不是立即执行的
                if (immediate === false && start_time === 0) {
                    start_time = now_time
                }
                const wait_time = interval - (now_time - start_time)
                if (wait_time <= 0) {
                    if (timer) clearTimeout(timer)
                    callback.apply(this, args)
                    start_time = now_time
                    timer = null
                    resolve(this)
                    return
                }

                // 判断是否需要执行尾部
                if (is_execute && !timer) {
                    timer = setTimeout(function () {
                        callback.apply(this, args)
                        start_time = new Date().getTime()
                        timer = null
                        resolve(this)
                    }, wait_time)
                }

            } catch (error) {
                reject(error)
            }
        })
    }

    // 开始设置我们取消节流函数执行的参数
    _throttle.cancel = function () {
        if (timer) clearTimeout(timer)
        start_time = 0
        timer = null
    }
    return _throttle
}
