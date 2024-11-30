import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: {
				'bg-pattern': "url('/src/lib/assets/images/pattern-bg.png')"
			}
		}
	},

	plugins: []
} satisfies Config;
