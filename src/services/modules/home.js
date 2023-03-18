import myRequest from '../request/index'

export function getHotSuggests() {
    return myRequest.get({
        url: '/home/hotSuggests'
    })
}