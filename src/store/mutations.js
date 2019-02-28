export default {
    // 城市名称页面
    changeCity(state, cityName) {
        state.city = cityName
        // 利用本地存储保存城市 ，防止刷新
        try {
            localStorage.city = cityName
        } catch (error) {

        }
    }
}