import request from '@/utils/request'

export function getEchartData(param) {
    return request({
        url: '/echart/getEchartData',
        method: 'get',
        params:param
    })
}