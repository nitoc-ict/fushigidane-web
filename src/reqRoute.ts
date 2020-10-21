import { RequestRoute } from './model'


const SendRouteRequests = (requestsRoute: RequestRoute) => {
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

    fetch('https://fushigidane.higashi.dev/route', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((resJSON) => {
        console.log(resJSON['Object'])
    });
}
