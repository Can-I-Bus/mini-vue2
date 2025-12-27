import { IObserver } from '../../types/observer';
import { defineReactive } from '../utils/observer';

export class Observer implements IObserver {
    constructor(data: Record<string, any>) {
        this.walk(data);
    }
    walk(data: Record<string, any>) {
        for (const key in data) {
            defineReactive(data, key, data[key]);
        }
    }
}
