/*
 * @Description: axios 拦截器封装
 * @Author: hyh
 * @since: 2019-05-28 21:50:07
 * @lastTime: 2019-08-07 09:45:31
 */
import Vue from 'vue';
import axios from 'axios';
import qs from 'qs'; // 序列化post类型的数据
import { Toast } from 'vant';
import { baseUrl } from './config';

// 取消请求，防止同时发送多个请求
// const cancelToken = axios.CancelToken

// 请求默认地址
axios.defaults.baseURL = baseUrl

// 设置请求超时
axios.defaults.timeout = 6000

// 设置请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/x-www-form-urlencoded'
}

// request拦截器
axios.interceptors.request.use(
  config => {
    // 数据加载之前弹窗
    Toast.loading({
      mask: true,
      message: '加载中...'
    })
    // 出来post请求
    config.method === 'post'
      ? (config.data = qs.parse(config.data))
      : (config.parmes = JSON.stringify(config.data))
    console.log(config.data)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// // response拦截器
axios.interceptors.response.use(
  response => {
    Toast.clear()
    return response.data
  },
  error => {
    // 返回错误
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data)
    } else {
      return Promise.reject({ message: '网络错误' })
    }
  }
)

Vue.prototype.$get = (url, parmes) =>
  new Promise((resolve, reject) => {
    axios
      .get(url, { params: parmes })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })

Vue.prototype.$post = (url, parmes) =>
  new Promise((resolve, reject) => {
    axios
      .post(url, qs.stringify(parmes))
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })

export default axios
