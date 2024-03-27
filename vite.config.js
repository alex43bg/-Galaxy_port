import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

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
				{
					src: 'src/Server_config/**/*',
					dest: '',
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
		outDir: './build_ready',
		emptyOutDir: true,
		sourcemap: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				skils: resolve(__dirname, 'src/Pages/Skils/index.html'),
				Projects: resolve(__dirname, 'src/Pages/Projects/index.html'),
				NotFoundPage: resolve(__dirname, 'src/Pages/NotFoundPage/index.html'),
			},
			output: {
				entryFileNames: '[name].js',
				chunkFileNames: chunkInfo => {
					return `src/Pages/${chunkInfo.name}/${chunkInfo.name}.js`
				},

				assetFileNames: assetInfo => {
					if (assetInfo.name.endsWith('.css')) {
						const cssFileName = assetInfo.name.replace(/\.css$/, '')

						return `src/Pages/${cssFileName}/${assetInfo.name}`
					} else {
						return `src/Pages/[name].[ext]`
					}
				},
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
