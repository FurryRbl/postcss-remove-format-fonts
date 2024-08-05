import { dts } from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default [
	{
		input: './src/main.js',
		output: [
			{
				format: 'esm',
				file: 'dist/index.mjs',
			},
			{
				format: 'cjs',
				file: 'dist/index.cjs',
			},
		],
		plugins: [terser(), commonjs()],
	},
	{
		input: './src/main.d.ts',
		output: [
			{
				file: 'dist/index.d.ts',
				format: 'es',
			},
		],
		plugins: [dts()],
	},
];
