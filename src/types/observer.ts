export interface IObserver {
    walk: (data: Record<string, any>) => void;
    observerArr: (data: any[]) => void;
}

export type ObserverData = (Record<string, any> | any[]) & { __ob__?: IObserver };
