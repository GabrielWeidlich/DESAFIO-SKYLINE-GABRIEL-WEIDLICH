import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F1ED',
        'text-primary': '#3C3C3C',
        'text-secondary': '#5A635C',
      },
      fontFamily: {
        mont: ['var(--font-montserrat)', 'sans-serif']
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config