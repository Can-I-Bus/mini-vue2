import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import clear from 'rollup-plugin-clear';
export default defineConfig({
    input: './src/core/index.ts',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name]-[hash:5].js',
        chunkFileNames: 'chunk-[hash:5].js',
        plugins: [terser()],
    },
    plugins: [
        clear({ targets: ['dist'] }),
        nodeResolve(),
        commonjs(),
        typescript(),
        babel({
            babelHelpers: 'runtime',
            include: 'src/**',
            exclude: 'node_modules/**',
            extensions: ['.js', '.ts'],
        }),
    ],
});
