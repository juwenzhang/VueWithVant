/**
 * 防抖函数，需要使用直接 cv
 * @param callback 回调函数
 * @param wait 回调函数执行需要等待的时间
 * @param immediate 判断我们的函数是否为立即执行的判断符
 * @return _debounce 防抖操作后我们实现返回的新的函数
 */
export function My_debounce(callback, wait = 200, immediate= false) {
    let timeout = null
    let is_executed = false
    const _debounce = function(...args)  {
        return new Promise((resolve, reject) => {
            try {
                if (timeout) clearTimeout(timeout)

                let res = undefined
                if (immediate && !is_executed) {
                    res = callback.apply(this, args)
                    is_executed = true
                    resolve(res)
                    return
                }

                // 防抖函数的实现一： 就是通过我们的定时器实现防抖函数的延迟触发
                timeout = setTimeout(() => {
                    res = callback.apply(this, args)
                    // 会了实现的是不仅仅是延迟执行，同时还需要实现我们的设置最终的取消上一次执行
                    timeout = null
                    is_executed = false
                    resolve(res)
                }, wait)
            } catch (err) {
                reject(err)
            }
        })
    }

    // 开始实现为我们的 _debounce 添加可以取消防抖的接口
    _debounce.cancel = function() {
        if (timeout) clearTimeout(timeout)
        is_executed = false
    }
    return _debounce
}

