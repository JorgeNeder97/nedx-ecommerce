import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2F2F2F',
                secondary: '#C2C2C2',
                tertiary: '#FBFBFB',
                accent: {
                    DEFAULT: '#FFD200',
                    secondary: '#ECC200',
                    tertiary: '#FFE300'
                },
                gray: '#E8E8E8',
            },
            fontFamily: {
                primary: 'Poppins',
            },
            boxShadow: {
                custom1: '8px 2px 48px 8px rgba(78, 78, 78, 0.08)',
                custom2: '8px 8px 38px 8px rgba(81, 73, 8, 0.06)',
                custom3: '-8px 10px 17px rgba(78, 78, 78, 0.08)',
            },
            dropShadow: {
                'xs': '1px 1px 1px black'
            },
            backgroundImage: {
                mainImage: 'url(background.jpg)',
            },
            backgroundSize: {
                mainSize: '200%',
            },
            transitionTimingFunction: {
                menuMobile: 'cubic-bezier(.65,.13,.22,.97)'
            },
            screens: {
                sm: '530px',
            }
        },
    },
    plugins: [
        daisyui,
    ],
    daisyui: {
        base: false,
    }
};
