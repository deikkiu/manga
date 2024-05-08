import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': '/src/components',
			'@store': '/src/store',
			'@assets': '/src/assets',
			'@hooks': '/src/hooks',
			'@pages': '/src/pages',
			'@services': '/src/services',
			'@utils': '/src/utils',
			'@routes': '/src/routes'
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "./src/assets/styles/_animations.scss";
					@import "./src/assets/styles/_variables.scss";
					@import "./src/assets/styles/_mixins.scss";
				`
			}
		}
	}
});
