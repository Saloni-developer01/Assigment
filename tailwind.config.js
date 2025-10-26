/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* Subtle white border */
        input: "var(--color-input)", /* Elevated surface color */
        ring: "var(--color-ring)", /* Vibrant indigo */
        background: "var(--color-background)", /* Rich dark base */
        foreground: "var(--color-foreground)", /* High-contrast white */
        primary: {
          DEFAULT: "var(--color-primary)", /* Deep professional navy */
          foreground: "var(--color-primary-foreground)", /* High-contrast white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* Slightly lighter navy */
          foreground: "var(--color-secondary-foreground)", /* High-contrast white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* Clear red */
          foreground: "var(--color-destructive-foreground)", /* High-contrast white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* Slightly lighter navy */
          foreground: "var(--color-muted-foreground)", /* Muted slate */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* Vibrant indigo */
          foreground: "var(--color-accent-foreground)", /* High-contrast white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* Elevated surface color */
          foreground: "var(--color-popover-foreground)", /* High-contrast white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* Elevated surface color */
          foreground: "var(--color-card-foreground)", /* High-contrast white */
        },
        surface: "var(--color-surface)", /* Elevated surface color */
        success: {
          DEFAULT: "var(--color-success)", /* Professional emerald */
          foreground: "var(--color-success-foreground)", /* High-contrast white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* Balanced amber */
          foreground: "var(--color-warning-foreground)", /* Rich dark base */
        },
        error: {
          DEFAULT: "var(--color-error)", /* Clear red */
          foreground: "var(--color-error-foreground)", /* High-contrast white */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'scale-xs': '0.64rem',
        'scale-sm': '0.8rem',
        'scale-base': '1rem',
        'scale-lg': '1.25rem',
        'scale-xl': '1.563rem',
        'scale-2xl': '1.953rem',
        'scale-3xl': '2.441rem',
      },
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 2vw, 1rem)',
        'fluid-sm': 'clamp(1rem, 3vw, 1.5rem)',
        'fluid-md': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-lg': 'clamp(2rem, 5vw, 3rem)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'professional': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'professional-lg': '0 4px 6px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
                "pulse-glow": "pulse-glow 1s ease-in-out 1", 
      },
      keyframes: {
                "pulse-glow": {
                    "0%, 100%": { boxShadow: "0 0 0 rgba(136, 191, 255, 0.4)" },
                    "50%": { boxShadow: "0 0 10px rgba(136, 191, 255, 0.8)" },
                }
            },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}