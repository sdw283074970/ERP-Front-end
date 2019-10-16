import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'https://localhost:44364/api/users/?userName=' + data.username + '&password=' + data.password,
    method: 'get',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
