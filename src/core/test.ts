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
        };
    },
});

console.log(miniVue);
