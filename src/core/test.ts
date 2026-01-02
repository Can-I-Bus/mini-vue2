import { MiniVue } from './index';

//@ts-expect-error MiniVue has function type
const miniVue = new MiniVue({
    el: 'app',
    data() {
        return {
            content: 'mini-vue2',
            description: 'A simple vue2 implementation',
            secData: {
                content: 'secContent',
            },
            list: [1, 2, 3, 4, { a: 5 }],
        };
    },
});

console.log(miniVue);
setTimeout(() => {
    miniVue.list.push(6, 7, 8, { b: 9 });
}, 2000);
