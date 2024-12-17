// 解决本地图片链接引入出现的问题，就是我们的动态加载图片的方法
const getAssetSourceByURL = (imageUrl) => {
    /**
     * new URL
     *  参数一是我们的相对路径
     *  参数二就是当前文件的绝对路径
     */
    return new URL(imageUrl, import.meta.url).href
}

export default getAssetSourceByURL