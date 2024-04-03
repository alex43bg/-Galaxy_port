import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default defineConfig({
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	plugins: [
		react(),
		viteStaticCopy({
			targets: [
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
		sourcemap: false,
		assetsDir: 'assets',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				skils: resolve(__dirname, 'src/Pages/Skils/index.html'),
				Projects: resolve(__dirname, 'src/Pages/Projects/index.html'),
				NotFoundPage: resolve(__dirname, 'src/Pages/NotFoundPage/index.html'),
			},
			output: {
				entryFileNames: '[name].[hash].js',
				chunkFileNames: chunkInfo => {
					return `src/Pages/${chunkInfo.name}/.[hash]___${chunkInfo.name}.js`
				},

				assetFileNames: assetInfo => {
					if (assetInfo.name.endsWith('.css')) {
						const cssFileName = assetInfo.name.replace(/\.css$/, '')
						const randomHash = Math.random().toString(36).substring(7);
						return `src/Pages/${cssFileName}/${randomHash}___${assetInfo.name}`
					} else {
						if (assetInfo.name.match(/\.(png|jpe?g|gif|webp|svg)$/)) {
							return `assets/images/${assetInfo.name}`
						} else if (assetInfo.name.match(/\.(mp4|webm)$/)) {
							return `assets/videos/${assetInfo.name}`
						} else {
							return `src/[name].[ext]`
						}
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
