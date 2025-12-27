import initMixins from './init';
import { InstanceOptions, IMiniVue } from '../../types/index';

// MiniVue实例构造函数
function MiniVue(this: IMiniVue, options: InstanceOptions): void {
    this._init(options);
}

//@ts-expect-error MiniVue has function type
initMixins(MiniVue);

export { MiniVue };
