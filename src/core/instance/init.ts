import type { InstanceOptions, IMiniVue } from '../../types/index';
import { initState } from './state';

let uid = 0;

// 初始化函数，执行各种初始化操作
export default function initMixins(MiniVue: IMiniVue): void {
    MiniVue.prototype._init = function (options: InstanceOptions) {
        const vm = this;
        vm.uid = uid++;
        vm._isMiniVue = true;
        vm.$options = options;
        initState(vm);
    };
}
