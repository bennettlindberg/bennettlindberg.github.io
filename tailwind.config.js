import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                inward_fade: {
                    '0%': { opacity: 0, transform: 'translate(0, 10px)' },
                    '100%': { opacity: 100, transform: 'translate(0, 0)' },
                },
                left_fade_expand: {
                    '0%': { opacity: 0, transform: 'translate(-100px, 0) scale(1, 0.2)' },
                    '100%': { opacity: 100, transform: 'translate(0, 0) scale(1, 1)' },
                },
                right_fade_expand: {
                    '0%': { opacity: 0, transform: 'translate(100px, 0) scale(1, 0.2)' },
                    '100%': { opacity: 100, transform: 'translate(0, 0) scale(1, 1)' },
                },
                left_fade_stretch: {
                    '0%': { opacity: 0, transform: 'translate(-100px, 0) scale(0.2, 1)' },
                    '100%': { opacity: 100, transform: 'translate(0, 0) scale(1, 1)' },
                },
                right_fade_stretch: {
                    '0%': { opacity: 0, transform: 'translate(100px, 0) scale(0.2, 1)' },
                    '100%': { opacity: 100, transform: 'translate(0, 0) scale(1, 1)' },
                },
                left_fade_rotate: {
                    '0%': { opacity: 0, transform: 'translate(-100px, 0) rotate(0)' },
                    '100%': { opacity: 100, transform: 'translate(0, 0) rotate(45)' },
                },
                right_fade_rotate: {
                    '0%': { opacity: 0, transform: 'translate(100px, 0) rotate(0)' },
                    '100%': { opacity: 100, transform: 'translate(0, 0) rotate(45)' },
                },
                left_fade_short: {
                    '0%': { opacity: 0, transform: 'translate(-50px, 0) scale(1, 0.2)' },
                    '100%': { opacity: 100, transform: 'translate(0, 0) scale(1, 1)' },
                },
                right_fade_short: {
                    '0%': { opacity: 0, transform: 'translate(50px, 0) scale(1, 0.2)' },
                    '100%': { opacity: 100, transform: 'translate(0, 0) scale(1, 1)' },
                },
                top_fade_short: {
                    '0%': { opacity: 0, transform: 'translate(0, -20px) scale(0.2, 1)' },
                    '100%': { opacity: 100, transform: 'translate(0, 0) scale(1, 1)' },
                },
                bottom_fade_short: {
                    '0%': { opacity: 0, transform: 'translate(0, 20px) scale(0.2, 1)' },
                    '100%': { opacity: 100, transform: 'translate(0, 0) scale(1, 1)' },
                },
                cursor_blink: {
                    '0%': { opacity: 0 },
                    '45%': { opacity: 0 },
                    '50%': { opacity: 100 },
                    '95%': { opacity: 100 },
                    '100%': { opacity: 0 },
                },
            },
            animation: {
                'fade-in': 'inward_fade 0.75s ease-in-out 1',
                'fade-left-expand': 'left_fade_expand 0.75s ease-in-out 1',
                'fade-right-expand': 'right_fade_expand 0.75s ease-in-out 1',
                'fade-left-stretch': 'left_fade_stretch 0.75s ease-in-out 1',
                'fade-right-stretch': 'right_fade_stretch 0.75s ease-in-out 1',
                'fade-left-rotate': 'left_fade_rotate 0.75s ease-in-out 1',
                'fade-right-rotate': 'right_fade_rotate 0.75s ease-in-out 1',
                'fade-left-short': 'left_fade_short 0.75s ease-in-out 1',
                'fade-right-short': 'right_fade_short 0.75s ease-in-out 1',
                'fade-top-short': 'top_fade_short 0.75s ease-in-out 1',
                'fade-bottom-short': 'bottom_fade_short 0.75s ease-in-out 1',
                'cursor-blink': 'cursor_blink 1.2s linear infinite',
            },
        },
    },
    plugins: [],
}
