class Depend {
    constructor() {
        this.reactiveFns = new Set()
    }

    addDepend(fn) {
        if (typeof fn === 'function' && fn) {
            this.reactiveFns.add(fn)
        } else {
            throw new Error(`Expected a function, but got ${typeof fn}`)
        }
    }

    notify() {
        this.reactiveFns.forEach(fn => fn())
    }
}

// 精确的获取我们的每一个对象属性依赖
const objMap = new WeakMap();
function getDepend(obj, key) {
    let map = objMap.get(obj)
    if (!map) {
        map = new Map()
        objMap.set(obj, map)
    }

    let dep = map.get(key)
    if (!dep) {
        dep = new Depend()
        map.set(key, dep)
    }
    return dep
}

// 依赖所需要进行添加的函数设置
let reactiveFN = null
function watchFN(fn) {
    if (reactiveFN) {
        reactiveFN = fn
        fn()
    } else {
        console.error("reactiveFN is not defined")
    }
}

// vue2 的响应式原理就是通过的是我们的 defineProperty 来实现的
function seleniumGetDepVue2(obj) {
    Object.keys(obj).forEach(key => {
        let value = obj[key];
        let dep = getDepend(obj, key);

        Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            set(newValue) {
                value = newValue
                dep.notify()
            },
            get() {
                dep.addDepend(reactiveFN);
                return value
            }
        })
    })
    return obj
}

// vue3 的实现就是通过 proxy 来实现的
function seleniumGetDepVue3(obj) {
    return new Proxy(obj, {
        set(target, key, newValue, receiver) {
            const res = Reflect.set(target, key, newValue, receiver)
            const dep = getDepend(target, key)
            dep.notify()
            return res
        },
        get(target, key, receiver) {
            const dep = getDepend(target, key)
            dep.addDepend(reactiveFN)
            return Reflect.get(target, key, receiver)
        }
    })
}



// 案例使用
const user = seleniumGetDepVue3({
    name: "juwenzhang",
    age: 18
})
watchFN(() => {
    console.log(`Name: ${user.name}, Age: ${user.age}`)
})
watchFN(() => {
    console.log(`Name: ${user.name}`)
})
watchFN(() => {
    console.log(`Age: ${user.age}`)
})
console.log(user)
console.log(user.name)
user.name = "jwz"
console.log(user.name)