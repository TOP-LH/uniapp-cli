/**
 * API 获取
 * @type {{}}
 */
let env = {}
let pro = process.env.NODE_ENV === 'production'
let dev = process.env.NODE_ENV === 'development'

if (dev) env.API_HOST = 'http://localhost:8769/' // 开发环境api
if (pro) env.API_HOST = 'https://aaa.bbb.com/' // 生产环境api

env.LOCAL_HOST = 'http://localhost:8080/'
env.API_PREFIX = '/wuhu/qifei/'
env.API_PREFIX_VERSION_V1_1 = '/api/v1.1'

export default env
