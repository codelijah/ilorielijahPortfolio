/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '390px',
      md: '768px',
      lg: '1024px',
      // xl: "1440px",
      // "2xl": "1920px",
    },
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
      },

      colors: {
        charcoal: 'rgb(26,26,26)',
        lightGrey: 'rgb(229, 231, 235)',
        lightGreyDark: 'rgb(121, 123, 127)',
        greyishBlue: 'hsl(215, 16%, 65%)',
        dark: '#000000',
        light: '#FFFFFF',
        borderGrey: '#222222',
        darkGrey: 'hsl(0, 0%, 14%)',
        cardBodyGrey: 'hsl(0, 0%, 70%)',
        cardHeadingGrey: 'hsl(0, 0%, 100%)',
        languageBg: 'hsl(220, 13%, 15%)',
        languageBorder: 'hsl(0, 0%, 20%)',
        languageHover: '#a0a0a0',
      },
    },
  },
  plugins: [],
};
