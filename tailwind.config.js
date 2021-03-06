module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'ping-slow': 'ping 5s cubic-bezier(1, 1, 0.2, 1) infinite',

      },
      keyframes: {
        spin: {
          to: {
            transform: 'rotate(-360deg)'
          }
        }
      }
    },
    // screens: {
    //   'sm': '576px',
    //   // => @media (min-width: 576px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 960px) { ... }

    //   'lg': '992px',
    //   // => @media (min-width: 1440px) { ... }
    // },
  },
  plugins: [],
}
