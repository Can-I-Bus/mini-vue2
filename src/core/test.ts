import { MiniVue } from './index';

//@ts-expect-error MiniVue has function type
new MiniVue({
    el: 'app',
});
