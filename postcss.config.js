// postcss.config.js
export default {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: "px" || "rem",
            viewportWidth: 375,  // 这个就是我们的设计搞，根据我们的设计搞进行的转换设置
        },
        // 'postcss-pxtorem': {
        //     rootValue: 37.5,
        //     propList: ['*'],
        // },
    },
}
