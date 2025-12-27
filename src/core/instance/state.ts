import { IMiniVue } from '../../types';
import { observer } from '../utils/observer';

const initData = (vm: IMiniVue) => {
    let data = vm.$options.data;
    data = typeof data === 'function' ? data() : data;
    vm._data = data;
    // 对数据进行响应式处理
    observer(data);

    // 对vm._data进行处理，使得vm进行访问和修改数据的时候，不必通过vm._data.**访问，而是可以直接vm.**
    for (const key in data) {
        Object.defineProperty(vm, key, {
            get() {
                return (data as Record<string, any>)[key];
            },
            set(newValue) {
                if (newValue === (data as Record<string, any>)[key]) return;
                (data as Record<string, any>)[key] = newValue;
            },
        });
    }
};

// 对数据的初始化集中处理
export const initState = (vm: IMiniVue) => {
    const options = vm.$options;
    // 如果MiniVue实例上有data属性的话，则初始化data
    if (options.data) {
        initData(vm);
    }
};
