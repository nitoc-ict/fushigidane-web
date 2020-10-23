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

        return await SendRouteRequests(reqRoute);
}
