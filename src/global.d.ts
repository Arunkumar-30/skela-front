declare module "amcharts3-react" {
    const AmCharts: any;
    export default AmCharts;
}

declare global {
    interface Window {
        AmCharts: any;
    }
}
export {};
