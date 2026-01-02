import { IObserver, ObserverData } from '../../types/observer';
import { defineReactive, observer } from '../utils/observer';
import { newArrProto } from './arr';

export class Observer implements IObserver {
    constructor(data: ObserverData) {
        // data.__ob__ = this   这样写会导致死反复给自身设置__ob__，设置完又设置，导致死递归
        Object.defineProperty(data, '__ob__', {
            value: this,
            enumerable: false, // 不可枚举（循环的时候不可枚举）
        });
        if (Array.isArray(data)) {
            Object.setPrototypeOf(data, newArrProto);
            this.observerArr(data);
        } else {
            this.walk(data);
        }
    }
    walk(data: Record<string, any>) {
        for (const key in data) {
            defineReactive(data, key, data[key]);
        }
    }
    observerArr(data: any[]) {
        data.forEach((item) => observer(item));
    }
}
