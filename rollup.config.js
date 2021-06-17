import typescript from '@rollup/plugin-typescript';
import inlineSvg from 'rollup-plugin-inline-svg';


export default {
	input: './src/index.ts',
	output: {
		file: './output/bundle.js',
		format: 'cjs'
	},
	plugins: [
		typescript(),
		inlineSvg()
	]
}