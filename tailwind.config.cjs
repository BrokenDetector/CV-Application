/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/components/*.{js,jsx}",
        "./src/**/*.{js, jsx, ts, tsx}",
    ],
    theme: {
        fontFamily: {
            body: ['Rubik'],
        },
        extend: {},
    },
    plugins: [],
};
