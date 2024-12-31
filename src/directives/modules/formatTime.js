import dayjs from "dayjs";

export default function directiveFormatTime(app) {
    app.directive("format-time", {
        mounted(el, binding) {
            let timeContent = el.textContent
            if (timeContent.length === 10) timeContent = timeContent * 1000

            // 开始实现获取我们的 value
            let value = binding.value
            if (!value) {
                value = 'YYYY-MM-DD'
            }

            // 开始实现回显
            el.textContent = dayjs(timeContent).format(value)
        }
    })
}