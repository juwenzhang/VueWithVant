import dayjs from "dayjs"
import {reactive} from "vue"

// 实现的是返回我们的持续的天数的格式化时间
export function formatData(date) {
    return dayjs(date).format("MM月DD日")
}

export function getDiffDays(startDate, endDate) {
    return dayjs(endDate).diff(startDate, "day")
}