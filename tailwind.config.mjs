import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		daisyui,
	],
	daisyui: {
		themes: [
			{
				"light": {
					"primary": "#FFF",
					"secondary": "#00FF00",
					"accent": "#0000FF",
					"neutral": "#FFFFFF",
					"base-100": "#f0f4f8",
					"primary-text": "#000000",
				},
				"dark": {
					"primary": "#000",
					"secondary": "#00FF00",
					"accent": "#0000FF",
					"neutral": "#000000",
					"base-100": "#1a202c",
					"primary-text": "#FFFFFF",
				},
			},
		]
	}
}
