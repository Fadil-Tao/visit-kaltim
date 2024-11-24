/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      fontFamily: {
        urbanist: ["Urbanist"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
		addUtilities({
		  ".text-shadow-none": {
			textShadow: "none",
		  },
		  ".text-shadow-sm": {
			textShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
		  },
		  ".text-shadow-md": {
			textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
		  },
		  ".text-shadow-lg": {
			textShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
		  },
		  ".text-shadow-xl": {
			textShadow: "0px 6px 8px rgba(0, 0, 0, 0.7)",
		  },
		  ".text-shadow-2xl": {
			textShadow: "0px 8px 12px rgba(0, 0, 0, 0.8)",
		  },
		  ".text-shadow-3xl": {
			textShadow: "0px 10px 16px rgba(0, 0, 0, 0.9)",
		  },
		  ".text-shadow-4xl": {
			textShadow: "0px 12px 20px rgba(0, 0, 0, 0.95)",
		  },
		  ".text-shadow-5xl": {
			textShadow: "0px 14px 24px rgba(0, 0, 0, 1)",
		  },
		});
	  })
  ],
};
