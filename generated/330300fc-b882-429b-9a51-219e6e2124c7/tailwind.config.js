```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brief2blok-primary': '#6366F1',
        'brief2blok-secondary': '#4F46E5',
        'brief2blok-light': '#F9FAFB',
        'brief2blok-dark': '#1F2937',
      },
    },
  },
  plugins: [],
}
```
