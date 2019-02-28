let defaultCity = "长沙"

// 捕获异常防止用户禁用了本地缓存
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (error) {

}
// 导处city
export default{
    city:defaultCity
}