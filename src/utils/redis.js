let redis= "redis"

/**
 * 设置
 * @param k 键key
 * @param v 值value
 * @param t 秒
 */
function put(k, v, t) {
    uni.setStorageSync(k, v)
    let seconds = parseInt(t)
    if (seconds > 0) {
        let newtime = Date.parse(new Date())
        newtime = newtime / 1000 + seconds;
        uni.setStorageSync(k + redis, newtime + "")
    } else {
        uni.removeStorageSync(k + redis)
    }
}

/**
 * 获取
 * @param k 键key
 * @returns {null|any}
 */
function get(k) {
    let deadtime = parseInt(uni.getStorageSync(k + redis))
    if (deadtime) {
        if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
            uni.removeStorageSync(k);
            console.log("过期了")
            return null
        }
    }
    let res=uni.getStorageSync(k)
    if(res){
        return res
    }else{
        return null
    }
}

/**
 * 删除
 * @param k
 */
function remove(k) {
    uni.removeStorageSync(k);
    uni.removeStorageSync(k + redis);
}

/**
 * 清除所有key
 */
function clear() {
    uni.clearStorageSync();
}

export {
    put,
    get,
    remove,
    clear
}