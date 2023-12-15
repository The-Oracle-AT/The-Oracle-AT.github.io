import { vitePreprocess } from '@sveltejs/kit/vite';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';


const config = {
	preprocess: vitePreprocess(), sveltePreprocess
};


export default config;