import { InstanceOptions, InstanceData } from './options';

export interface IMiniVue extends Function {
    _init: (options: InstanceOptions) => void;
    _data: InstanceData;
    $options: InstanceOptions;
}
