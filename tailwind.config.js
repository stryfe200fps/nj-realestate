const { reduce } = require('lodash');
const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
              },
            colors: {
                'primary': '#b40101',
                'nav': '#ededed',
                'primary-hover': '#992A1C',
                'footer' : '#898989'
            },
              container: {
      // you can configure the container to be centered
        center: true,
        padding: '1rem',
      screens: {
        sm: '600px',
        md: '1028px',
        '2xl': '1200px',
      },
    },



        },
           
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
