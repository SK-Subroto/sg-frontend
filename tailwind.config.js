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
  },
  plugins: [],
}
