module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '100px': '100px',
        '150px': '150px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
