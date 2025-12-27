import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import clear from 'rollup-plugin-clear';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import htmlTemplate from 'rollup-plugin-generate-html-template';
export default defineConfig({
    input: './src/core/test.ts',
    output: {
        dir: 'test',
        format: 'esm',
        entryFileNames: '[name]-[hash:6].js',
        chunkFileNames: 'chunk-[hash:6].js',
        sourcemap: true,
    },
    plugins: [
        clear({ targets: ['test'] }),
        nodeResolve(),
        commonjs(),
        typescript(),
        babel({
            babelHelpers: 'runtime',
            include: 'src/**',
            exclude: 'node_modules/**',
            extensions: ['.js', '.ts'],
        }),
        livereload({
            watch: 'test',
        }),
        serve({
            open: true,
            port: 8888,
            contentBase: ['test'],
            openPage: '/html/test.html',
        }),
        htmlTemplate({
            template: 'src/test.html',
            target: 'test/html/test.html',
            attrs: ['type="module"'],
        }),
    ],
});
