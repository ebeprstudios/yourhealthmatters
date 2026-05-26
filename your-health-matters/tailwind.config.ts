import type { Config } from 'tailwindcss'

/**
 * Tailwind theme consumes the CSS variables defined in styles/tokens.css.
 * tokens.css is the single source of truth — no raw hex values here.
 *
 * Color carries meaning (organ system or insulin zone), never aesthetic mood.
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutrals / canvas
        ink: {
          900: 'var(--ink-900)',
          700: 'var(--ink-700)',
          500: 'var(--ink-500)',
          300: 'var(--ink-300)',
          100: 'var(--ink-100)',
        },
        paper: {
          DEFAULT: 'var(--paper)',
          raised: 'var(--paper-raised)',
          sunk: 'var(--paper-sunk)',
        },

        // Insulin zones (FIXED)
        zone: {
          peak: 'var(--zone-peak)',
          'peak-soft': 'var(--zone-peak-soft)',
          declining: 'var(--zone-declining)',
          'declining-soft': 'var(--zone-declining-soft)',
          caution: 'var(--zone-caution)',
          'caution-soft': 'var(--zone-caution-soft)',
          closed: 'var(--zone-closed)',
          'closed-soft': 'var(--zone-closed-soft)',
        },

        // Organ systems (18, each with -soft companion)
        system: {
          heart: 'var(--system-heart)',
          'heart-soft': 'var(--system-heart-soft)',
          kidneys: 'var(--system-kidneys)',
          'kidneys-soft': 'var(--system-kidneys-soft)',
          'blood-glucose': 'var(--system-blood-glucose)',
          'blood-glucose-soft': 'var(--system-blood-glucose-soft)',
          liver: 'var(--system-liver)',
          'liver-soft': 'var(--system-liver-soft)',
          'anti-inflammatory': 'var(--system-anti-inflammatory)',
          'anti-inflammatory-soft': 'var(--system-anti-inflammatory-soft)',
          gut: 'var(--system-gut)',
          'gut-soft': 'var(--system-gut-soft)',
          'artery-health': 'var(--system-artery-health)',
          'artery-health-soft': 'var(--system-artery-health-soft)',
          'cellular-health': 'var(--system-cellular-health)',
          'cellular-health-soft': 'var(--system-cellular-health-soft)',
          brain: 'var(--system-brain)',
          'brain-soft': 'var(--system-brain-soft)',
          skin: 'var(--system-skin)',
          'skin-soft': 'var(--system-skin-soft)',
          lymphatic: 'var(--system-lymphatic)',
          'lymphatic-soft': 'var(--system-lymphatic-soft)',
          adrenal: 'var(--system-adrenal)',
          'adrenal-soft': 'var(--system-adrenal-soft)',
          'blood-health': 'var(--system-blood-health)',
          'blood-health-soft': 'var(--system-blood-health-soft)',
          eyes: 'var(--system-eyes)',
          'eyes-soft': 'var(--system-eyes-soft)',
          thyroid: 'var(--system-thyroid)',
          'thyroid-soft': 'var(--system-thyroid-soft)',
          immune: 'var(--system-immune)',
          'immune-soft': 'var(--system-immune-soft)',
          'bones-joints': 'var(--system-bones-joints)',
          'bones-joints-soft': 'var(--system-bones-joints-soft)',
          lungs: 'var(--system-lungs)',
          'lungs-soft': 'var(--system-lungs-soft)',
        },

        // Semantic callouts
        callout: {
          clinical: 'var(--callout-clinical)',
          warning: 'var(--callout-warning)',
          firststep: 'var(--callout-firststep)',
        },

        // Legacy aliases — temporary, so existing components that still
        // reference forest/cream/gold render correctly while they are
        // migrated. Each maps to the closest meaning-bearing token.
        forest: {
          50: 'var(--zone-peak-soft)',
          100: 'var(--paper-sunk)',
          200: 'var(--ink-100)',
          300: 'var(--ink-300)',
          400: 'var(--ink-500)',
          500: 'var(--zone-peak)',
          600: 'var(--zone-peak)',
          700: 'var(--zone-peak)',
          800: 'var(--zone-peak)',
          900: 'var(--zone-peak)',
          950: 'var(--ink-900)',
          DEFAULT: 'var(--zone-peak)',
        },
        cream: {
          DEFAULT: 'var(--paper)',
          50: 'var(--paper-raised)',
          100: 'var(--paper)',
          200: 'var(--paper-sunk)',
        },
        gold: {
          400: 'var(--zone-declining)',
          500: 'var(--zone-declining)',
          600: 'var(--zone-declining)',
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        raised: 'var(--shadow-raised)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: 'var(--container-max)',
        narrow: 'var(--container-narrow)',
        prose: 'var(--container-prose-max)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.5s ease forwards',
        'scale-in': 'scaleIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer-gradient':
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
      },
    },
  },
  plugins: [],
}
export default config
