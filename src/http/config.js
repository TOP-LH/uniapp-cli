import env from './env'
import * as redis from '@/utils/redis'
import Fly from 'flyio/dist/npm/wx';

// 常见的http状态码信息
let httpCode = {
    400: '请求参数错误',
    401: '权限不足, 请重新登录',
    403: '服务器拒绝本次访问',
    404: '请求资源未找到',
    500: '内部服务器错误',
    501: '服务器不支持该请求中使用的方法',
    502: '网关错误'
}

// 引入 fly
const fly = new Fly();
const newFly = new Fly();

// 设置请求基地址
fly.config.baseURL = env.API_HOST
// 设置超时时间
fly.config.timout = 5000

// 设置请求基地址
newFly.config.baseURL = env.API_HOST
// 设置超时时间
newFly.config.timout = 5000

// 请求拦截
fly.interceptors.request.use(request => {
    console.log(`发起请求：path:${request.url}，baseURL:${request.baseURL}`)
    // 开启加载动画
    uni.showLoading({
        title: '努力加载中~',
        mask: true
    })
    // 添加编码
    request.headers['content-type'] = 'application/json;charset=UTF-8'
    // 获取token,放入头中
    let token = redis.get('token');
    if (token) {
        request.headers['Authorization'] = `bearer ${token}`;
    } else {
        // 如果不是登陆方法，则需要拦截
        if (request.url != '/login') {
            console.log("没有token，先请求token...");
            fly.lock()
            return newFly.get("/token").then(res => {
                request.headers["Authorization"] = res.data.data.token;
                redis.set('token', res.data.data.token);
                log("token请求成功，值为: " + res.data.data.token);
                log(`继续完成请求：path:${request.url}，baseURL:${request.baseURL}`)
                return request; //只有最终返回request对象时，原来的请求才会继续
            }).finally(() => {
                fly.unlock(); //解锁后，会继续发起请求队列中的任务，详情见后面文档
            })
        }
    }
    return request;
});

// 响应拦截
fly.interceptors.response.use(
    response => {
        //关闭加载动画
        uni.hideLoading()
        return response.data
    },
    error => {
        //关闭加载动画
        uni.hideLoading()
        // 根据请求失败的http状态码去给用户相应的提示
        tips = error.status in httpCode ? httpCode[error.status] : error.message
        uni.showToast({title: tips, icon: "none"});
    }
)

export default fly