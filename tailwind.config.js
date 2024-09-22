/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',
			black: '#000000',
			gray: '#F1F2F6',
			primary: {
				background: '#1C54E3',
				text: '#FFFFFF',
			},
			secondary: {
				background: '#F9CA24',
				text: '#2c3e50',
			},
			danger: {
				background: '#C94D49',
				text: '#FFFFFF',
			},
			success: {
				background: '#39853D',
				text: '#FFFFFF',
			},
			information: {
				background: '#9D5AB8',
				text: '#FFFFFF',
			},
			table: {
				'header-bg': '#F1F2F6',
				'footer-bg': '#FFFFFF',
				'hover-bg': '#F3F6FE',
				'selected-bg': '#FEFAE9',
			},
			checkbox: {
				'border-color': 'gray',
				'hover-bg': '#FEFAE9',
			},
		},
		// fontFamily: {
		// 	inter: ['var(--font-latin)', ...fontFamily.sans],
		// 	pixelify_sans: ['var(--font-pixelify_sans)', ...fontFamily.sans],
		// },
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				pixelify_sans: ['Pixelify Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
