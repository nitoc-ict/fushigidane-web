interface RequestRoute {
    origin: string;
    destination: string;
    isTransitSea: boolean;
    isTransitConveni: boolean;
}

interface Window {
    GetRouteData(): void;
}

window.GetRouteData = () => {
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

    console.log(reqRoute)

    return reqRoute;
};
