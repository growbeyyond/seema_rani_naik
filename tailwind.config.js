module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Grounded authority and transformation warmth
        primary: {
          DEFAULT: "#8B4513", // saddle-brown
          50: "#FDF8F3",
          100: "#F9E8D8",
          200: "#F2D1B1",
          300: "#E8B48A",
          400: "#DD9763",
          500: "#8B4513", // saddle-brown
          600: "#7A3D11",
          700: "#69350F",
          800: "#582D0D",
          900: "#47250B",
        },
        // Secondary Colors - Growth and natural wisdom
        secondary: {
          DEFAULT: "#6B8E23", // olive-drab
          50: "#F6F8F1",
          100: "#E8F0D8",
          200: "#D1E1B1",
          300: "#B4D28A",
          400: "#97C363",
          500: "#6B8E23", // olive-drab
          600: "#5F7F20",
          700: "#53701C",
          800: "#476119",
          900: "#3B5215",
        },
        // Accent Colors - Breakthrough moments and premium positioning
        accent: {
          DEFAULT: "#DAA520", // goldenrod
          50: "#FEFCF6",
          100: "#FCF5E1",
          200: "#F8EBC3",
          300: "#F3E1A5",
          400: "#EED787",
          500: "#DAA520", // goldenrod
          600: "#C4941D",
          700: "#AE831A",
          800: "#987217",
          900: "#826114",
        },
        // Background Colors
        background: "#FEFEFE", // near-white
        surface: "#F8F6F3", // warm-gray-50
        // Text Colors
        text: {
          primary: "#2C2C2C", // gray-800
          secondary: "#666666", // gray-500
        },
        // Status Colors
        success: "#228B22", // forest-green
        warning: "#FF8C00", // dark-orange
        error: "#CD5C5C", // indian-red
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Montserrat', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'modal': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'contemplative': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'elevation': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'gentle-bounce': 'gentleBounce 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleBounce: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0,-8px,0)' },
          '70%': { transform: 'translate3d(0,-4px,0)' },
          '90%': { transform: 'translate3d(0,-2px,0)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}