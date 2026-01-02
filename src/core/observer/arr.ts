import { observer } from '../utils';

// 获取数组的原型
const oldArrPrototype = Array.prototype;
// 需要重写的方法
const needWriteMthods = ['push', 'shift', 'unshift', 'slice', 'sort', 'reverse'] as const;
// 基于数组的原型来创造一个新的原型
const newArrProto = Object.create(oldArrPrototype);

needWriteMthods.forEach((method) => {
    const original = oldArrPrototype[method];
    newArrProto[method] = function (...args: any[]) {
        console.log(`方法：${method},监听到了数组变化`);
        // 如果新增了数据，需要对新增的数据也进行监听
        let inserted: any[] = [];

        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'slice':
                inserted = args.slice(2);
                break;
        }
        console.log(inserted);
        if (inserted.length) {
            observer(inserted);
        }
        return original.apply(this, args);
    };
});

export { newArrProto };
