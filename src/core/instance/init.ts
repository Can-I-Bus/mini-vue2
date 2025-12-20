import type { InstanceOptions, IMiniVue } from '../types/index';

export default function initMixins(MiniVue: IMiniVue): void {
    MiniVue.prototype._init = function (options: InstanceOptions) {
        console.log(options);
    };
}
