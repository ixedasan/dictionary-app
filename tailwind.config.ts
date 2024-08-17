import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--clr-primary)',
        accent: 'var(--clr-accent)',
        light_theme_body: 'var(--clr-light-theme-body)',
        dark_theme_body: 'var(--clr-dark-theme-body)',
      },
      fontSize: {
        'fs-body': [
          'var(--fs-body)',
          {
            lineHeight: '1.5rem',
            fontWeight: 'var(--fw-normal)',
          },
        ],
        'fs-input': [
          'var(--fs-input)',
          {
            lineHeight: '2rem',
            fontWeight: 'var(--fw-bold)',
          },
        ],
        'fs-title': [
          'var(--fs-title)',
          {
            lineHeight: '3rem',
            fontWeight: 'var(--fw-bold)',
          },
        ],
        'fs-sub-title': [
          'var(--fs-sub-title)',
          {
            lineHeight: '2rem',
            fontWeight: 'var(--fw-bold)',
          },
        ],
        'fs-sub-heading': [
          'var(--fs-sub-heading)',
          {
            lineHeight: '2rem',
            fontWeight: 'var(--fw-normal)',
          },
        ],
        'fs-link': [
          'var(--fs-link)',
          {
            lineHeight: '2rem',
            fontWeight: 'var(--fw-normal)',
          },
        ],
      },
    },
  },
  plugins: [],
}
export default config
