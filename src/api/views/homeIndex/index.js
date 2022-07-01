import request from '@/utils/request'

const url = '/system/channel'

export function listCpaData(query) {
  return request({
    url: url + '/cpaDataList',
    method: 'get',
    params: query
  })
}
