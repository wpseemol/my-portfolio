/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryColor: '#00B0FF',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
