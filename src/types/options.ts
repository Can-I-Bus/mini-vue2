import { IObserver } from './observer';

type DataFunction = () => Record<string, any>;
export type InstanceData = (Record<string, any> | DataFunction) & { __ob__?: IObserver };

export type InstanceOptions = {
    el: string;
    data: InstanceData;
};
