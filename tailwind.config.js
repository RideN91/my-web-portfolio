/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/components/*.js"],
    theme: {
        colors: {
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
          },
        extend: {
            backgroundImage: (theme) => ({
                'gradient-primary': `linear-gradient(to right, ${theme('colors.pink')}, ${theme('colors.orange')})`,
            }),
        },
    },
    plugins: [],
}
