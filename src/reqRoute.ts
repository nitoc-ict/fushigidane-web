import { RequestRoute } from './model'

const AXIOS = require('axios')

export const SendRouteRequests = async (requestsRoute: RequestRoute) => {
    type SendData = {
        'origin': string,
        'destination': string,
        'scenes': string[],
    }

    let routeRes: any;

    let data: SendData = {
        'origin': requestsRoute.origin,
        'destination': requestsRoute.destination,
        'scenes': []
    }

    if (requestsRoute.isTransitConveni) {
        data.scenes.push('convenience_store')
    }

    if (requestsRoute.isTransitSea) {
        data.scenes.push('sea')
    }


    await AXIOS.post('https://fushigidane.higashi.dev/route', data)
    .then((response) => {
        routeRes = response.data
    })
    .catch((error) => {
        console.log(error);
        if (error.response.status === 400) {
            alert('リクエストの形式が間違っています');
        } else if (error.response.status === 500) {
            alert('サーバーエラーです\n時間をおいて試してください');
        } else if (error.response.status === 502) {
            alert('サーバーが停止しています');
        }
    });


    return routeRes;
}
