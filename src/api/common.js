import request from '@/utils/request'

export function regionList(query) {
  return request({
    url: '/common/region',
    method: 'get',
    params: query
  })
}


export function regionListRole(query) {
  return request({
    url: '/common/commonRegionRole',
    method: 'get',
    params: query
  })
}

export function roleList(query) {
  return request({
    url: '/common/role',
    method: 'get',
    params: query
  })
}

