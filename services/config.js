/*
 * @Description: 环境变量配置信息
 * @Author: hyh
 * @since: 2019-05-29 09:58:28
 * @lastTime: 2019-08-06 23:16:03
 */

let baseUrl = '';
if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://127.0.0.1:5000';
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = '';
}

export { baseUrl }
