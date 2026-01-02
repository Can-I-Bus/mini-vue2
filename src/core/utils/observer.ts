import { Observer } from '../observer';
import { InstanceData } from '../../types';

// 将某一个数据定义成响应式的数据
export const defineReactive = (target: Object, key: string, value: any) => {
    observer(value);
    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue) {
            if (newValue === value) return;
            observer(newValue);
            value = newValue;
        },
    });
};

// 对实例的data数据进行劫持，进行响应式处理
export const observer = (data: InstanceData) => {
    if (typeof data !== 'object' || data === null) {
        return;
    }
    // TODO: 这里要判断data对象是否被劫持过，如果已经被劫持过了，那就不需要再劫持了
    if (data.__ob__ instanceof Observer) {
        return data.__ob__;
    }
    return new Observer(data);
};
