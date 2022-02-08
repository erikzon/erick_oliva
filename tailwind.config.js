const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      translate: {
        'minus50': '-50%',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',      
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    })
  ],
}
