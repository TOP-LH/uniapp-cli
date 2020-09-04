/**
 * 取值
 * @param key
 * @param sync
 * @returns {string|boolean|any}
 */
function get(key,sync = true) {
    try {
		if(sync){
			return uni.getStorageSync(key);
		}else{
			let data = '';
			uni.getStorage({
				key:key,
				success: function (res) {
					data = res.data;
				}
			});
			return data;
		}
    } catch (e) {
        return false;
    }
}

/**
 * 赋值
 * @param key
 * @param value
 * @param sync
 */
function set(key, value, sync = true) {
    try {
        if (sync) {
            return uni.setStorageSync(key, value);
        } else {
            uni.setStorage({
                key: key,
                data: value
            });
        }
    } catch (e) {

    }
}

/**
 * 移除
 * @param key
 * @param sync
 * @returns {boolean|void}
 */
function del(key, sync = true){
    try {
        if (sync) {
            return uni.removeStorageSync(key);
        } else {
            uni.removeStorage({
                key: key
            });
        }
    } catch (e) {
        return false;
    }
}

/**
 * 清空所有缓存
 * @param sync
 * @returns {boolean|void}
 */
function clear(sync = true){
    try {
        if (sync) {
            return uni.clearStorageSync();
        } else {
            uni.clearStorage();
        }
    } catch (e) {
        return false;
    }
}

export {
    get,
    set,
    del,
    clear
}