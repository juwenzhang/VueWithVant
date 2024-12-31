export default function directiveUnit(app) {
    app.directive('unit', {
        mounted(el, binding) {
            const defaultText = el.textContent
            let unit = binding.value
            if (!unit) unit = "￥"
            el.textContent = unit + defaultText
        }
    })
}