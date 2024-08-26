/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'primary-color': 'rgba(132, 204, 22, 1)',
            },
            fontFamily: {
                'poppins': 'Poppins',
            }
        },
    },
    plugins: [],
}