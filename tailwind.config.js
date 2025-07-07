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
        // Neobrutalism color palette
        'neo-black': '#000000',
        'neo-white': '#FFFFFF',
        'neo-yellow': '#FFFF00',
        'neo-pink': '#FF00FF',
        'neo-cyan': '#00FFFF',
        'neo-green': '#00FF00',
        'neo-red': '#FF0000',
        'neo-blue': '#0000FF',
        'neo-orange': '#FF8000',
        'neo-purple': '#8000FF',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
        'bold': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #000000',
        'neo-lg': '8px 8px 0px 0px #000000',
        'neo-xl': '12px 12px 0px 0px #000000',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-fast': 'pulse 1s infinite',
      }
    },
  },
  plugins: [],
}