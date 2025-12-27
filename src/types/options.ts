type DataFunction = () => Record<string, any>;
export type InstanceData = Record<string, any> | DataFunction;

export type InstanceOptions = {
    el: string;
    data: InstanceData;
};
