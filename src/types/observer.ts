export interface IObserver {
    walk: (data: Record<string, any>) => void;
}
