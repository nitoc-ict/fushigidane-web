import { RequestRoute } from './model';
import { SendRouteRequests } from './reqRoute';

declare global {
    interface Window {
        GetRouteData(): any;
    }
}

window.GetRouteData = async () => {
        const originElem: HTMLInputElement = <HTMLInputElement>document.getElementById('origin');
        const destinationElem: HTMLInputElement = <HTMLInputElement>document.getElementById('destination');
        const seaStatus: HTMLInputElement = <HTMLInputElement>document.getElementById('sea');
        const conveniStatus: HTMLInputElement = <HTMLInputElement>document.getElementById('conveni');
        let reqRoute: RequestRoute = {
            origin: originElem.value,
            destination: destinationElem.value,
            isTransitSea: seaStatus.checked,
            isTransitConveni: conveniStatus.checked,
        };

        if (!reqRoute.isTransitSea && !reqRoute.isTransitConveni) {
            alert('経由地を選択してください');
        }

        if (reqRoute.origin.indexOf('沖縄') === -1 && reqRoute.origin.indexOf('okinawa') === -1) {
            alert('出発地点が沖縄県のものではないか、正しく入力されていません');
        }

        if (reqRoute.destination.indexOf('okinawa') && reqRoute.destination.indexOf('沖縄') === -1) {
            alert('到着地点が沖縄県のものではないか、正しく入力されていません');
        }

        return await SendRouteRequests(reqRoute);
}
