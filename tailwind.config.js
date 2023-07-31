/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm:'260px',
      mobileS: '320px',
      mobileM: '500px',
      tablet: '768px',
      laptop: '1024px',
      laptopL: '1440px',
      '4k': '2560px',
    },
    extend: {},
    colors: {
      n1: '#F7F8FA',
      n5: '#919EB6',
      n9: '#313B49',
      n10: '#1D232B',
      n2: '#EDEEF3',
      error: '#FF003E',
      n11: '#080A0C',
    },
  },
  plugins: [],
};
