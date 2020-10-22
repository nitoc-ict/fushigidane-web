import { RequestRoute } from './model'

const AXIOS = require('axios')

export const SendRouteRequests = (requestsRoute: RequestRoute) => {
    type SendData = {
        'origin': string,
        'destination': string,
        'scenes': string[],
    }

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

    AXIOS.post('https://fushigidane.higashi.dev/route', data)
    .then(res => res.json())
    .then((resJSON) => {
        console.log(resJSON['Object']);
    })
    .catch((error) => {
        console.log(error);
    });
}
