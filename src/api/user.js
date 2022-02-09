import axios from './axios'

export const getUsers = (params) => {
  return axios.request({
    url: axios.baseUrl+'users',
    method: 'post',
    data: params
  })
}

export const signIn = (params) => {
  return axios.request({
    url: axios.baseUrl+'signin',
    method: 'post',
    data: params
  })
}




// import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-element-admin/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-element-admin/user/logout',
//     method: 'post'
//   })
// }






