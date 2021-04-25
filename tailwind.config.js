const colors = require(`./config/styles/colors`);
const spacing = require(`./config/styles/spacing`);
const breakpoints = require(`./config/styles/breakpoints`);
const fonts = require(`./config/styles/fonts`);

module.exports = {
  purge: [`./src/**/*.{js,jsx,ts,tsx}`],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: {
          900: colors.bgPrimary900,
          800: colors.bgPrimary800,
          700: colors.bgPrimary700,
          600: colors.bgPrimary600,
          500: colors.bgPrimary500,
          400: colors.bgPrimary400,
          300: colors.bgPrimary300,
          200: colors.bgPrimary200,
          100: colors.bgPrimary100,
        },
      },
      borderColor: {
        primary: {
          900: colors.bgPrimary900,
          800: colors.bgPrimary800,
          700: colors.bgPrimary700,
          600: colors.bgPrimary600,
          500: colors.bgPrimary500,
          400: colors.bgPrimary400,
          300: colors.bgPrimary300,
          200: colors.bgPrimary200,
          100: colors.bgPrimary100,
        },
      },
      textColor: {
        primary: {
          900: colors.textPrimary900,
          800: colors.textPrimary800,
          700: colors.textPrimary700,
          600: colors.textPrimary600,
          500: colors.textPrimary500,
          400: colors.textPrimary400,
          300: colors.textPrimary300,
          200: colors.textPrimary200,
          100: colors.textPrimary100,
        },
      },
      colors: {
        accent: colors.primary,
        secundary: colors.secundary,
        tertiary: colors.tertiary,
        quaternary: colors.quaternary,
        error: colors.error,
        success: colors.success,
      },
      spacing: {
        xsmall: spacing.xsmall,
        small: spacing.small,
        default: spacing.default,
        large: spacing.large,
        xlarge: spacing.xlarge,
        xxlarge: spacing.xxlarge,
      },
      fontFamily: {
        primary: fonts.family,
        secundary: fonts.secundary,
      },
      screens: {
        xsm: breakpoints.xsm,
        sm: breakpoints.sm,
        md: breakpoints.md,
        lg: breakpoints.lg,
        xl: breakpoints.xl,
        '2xl': breakpoints.xxl,
        wd: breakpoints.wd,
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: `0`,
            transform: `translateY(-20px)`,
          },
          '100%': {
            opacity: `1`,
            transform: `translateY(0)`,
          },
        },
        'fade-out-down': {
          from: {
            opacity: `1`,
            transform: `translateY(0px)`,
          },
          to: {
            opacity: `0`,
            transform: `translateY(20px)`,
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: `0`,
            transform: `translateY(20px)`,
          },
          '100%': {
            opacity: `1`,
            transform: `translateY(0)`,
          },
        },
        'fade-out-up': {
          from: {
            opacity: `1`,
            transform: `translateY(0px)`,
          },
          to: {
            opacity: `0`,
            transform: `translateY(20px)`,
          },
        },
        shake: {
          '0%, 100%': {
            transform: `translateX(0)`,
          },
          '20%, 60%': {
            transform: `translateX(-20px)`,
          },
          '40%, 80%': {
            transform: `translateX(20px)`,
          },
        },
        stroke: {
          '100%': {
            'stroke-dashoffset': '0',
          },
        },
        scale: {
          '0%, 100%': {
            transform: 'none',
          },
          '50%': {
            transform: 'scale3d(1.1, 1.1, 1)',
          },
        },
      },
      animation: {
        'fade-in-down': `fade-in-down 0.4s forwards`,
        'fade-out-down': `fade-out-down 0.4s forwards`,
        'fade-in-up': `fade-in-up 0.4s forwards`,
        'fade-out-up': `fade-out-up 0.4s forwards`,
        shake: `shake 0.5s forwards`,
        stroke: `stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) forwards;`,
        scale: `scale .3s ease-in-out`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
