import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { resolve } from 'path'

export default defineConfig({
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	plugins: [
		react(),
		viteStaticCopy({
			targets: [
				{
					src: 'src/public/**/*',
					dest: 'assets/images',
				},
			],
		}),
	],
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	server: {
		host: true,
		proxy: {
			'/api': {
				target: 'http://your-other-server-url',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	build: {
		outDir: './dist',
		emptyOutDir: true,
		sourcemap: false,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				skils: resolve(__dirname, './src/Pages/Skils/index.html'),
				Projects: resolve(__dirname, './src/Pages/Projects/index.html'),
			},
			output: {
				entryFileNames: '[name].js',
				chunkFileNames: 'src/Pages/[name].js',
				assetFileNames: 'src/Pages/[name].[ext]',
			},
		},
	},
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	resolve: {
		alias: {
			components: '/src/components/',
			pages: '/src/pages/',
			utils: '/src/utils/',
			assets: '/src/assets/',
			src: '/src',
		},
	},

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
})
