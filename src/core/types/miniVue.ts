import { InstanceOptions } from './options';

export interface IMiniVue extends Function {
    _init: (options: InstanceOptions) => void;
}
