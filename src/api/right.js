import request from '@/utils/request'


export function createRight(query) {
    return request({
        url: '/right/createRight',
        method: 'get',
        params: query
    })
}


export function rightList(query) {
    return request({
        url: '/right/rightList',
        method: 'get',
        params: query
    })
}
export function updateRightStatus(id,status){
    return request({
        url:'/right/updateRightStatus',
        method:'get',
        params: {id,status}
    })
}
export function updateRight(query){
    return request({
        url:'/right/updateRight',
        method:'get',
        params: query
    })}
export function selectById(id){
        return request({
            url:`/right/selectById/${id}`,
            method:'get',
 })
}

export function getRightMap(){
    return request({
        url:`/right/getRightMap`,
        method:'get',
    })
}

export function addRoleToRight(query){
    return request({
        url:`/right/addRoleToRight`,
        method:'get',
        params: query
    })
}
export function getCodeIfSame(id){
    return request({
        url:`/right/getCodeIfSame/${id}`,
        method:'get',
    })
}

export function getRightCodeByRoleCode(roleCode){
    return request({
        url:`/right/getRightCodeByRoleCode`,
        method:'get',
        params:{roleCode:roleCode}
    })
}