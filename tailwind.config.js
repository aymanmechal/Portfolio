/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        bg: '#f6f1ec',
        surface: '#ffffff',
        navy: '#0b2233',
        muted: '#5b6b78',
        blue: '#213ded',
        green: '#00b181',
        yellow: '#e6c82a',
        orange: '#ff5a1f',
        sky: '#35b5f0',
        blush: '#f0e2dd',
        white: '#ffffff'
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif']
      },
      borderRadius: {
        card: '24px',
        block: '12px'
      }
    }
  },
  corePlugins: { container: false },
  plugins: []
}
