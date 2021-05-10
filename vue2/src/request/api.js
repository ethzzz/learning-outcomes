import service from "./request";

export function getRequest(url, data) {
    return service({
        url,
        method: 'get',
        data,
    })
}

export function putRequest(url, data) {
    return service({
        url,
        method: 'post',
        data
    })
}