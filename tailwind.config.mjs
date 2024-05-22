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
				"mytheme-light": {
					"primary": "#FF00FF",
					"secondary": "#00FF00",
					"accent": "#0000FF",
					"neutral": "#FFFFFF",
					"base-100": "#f0f4f8",
				}
			},
			'dark',
		]
	}
}
