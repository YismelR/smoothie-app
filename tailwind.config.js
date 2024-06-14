/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      "2xl": "1400px",
      "s-phone": "320px",
      "md-phone": "375px",
      "lg-phone": "425px",
      "md-tablet": "768px",
      "s-laptop": "1024px",
      "md-laptop": "1440px",
      "md-desktop": "1920px",
      "lg-desktop": "2560px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 15px 20px -11px",
        cardShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
        headerShadow: "0px 4px 4px rgba(0, 0, 0, 0.06)",
        footerShadow: "0px -4px 4px rgba(0, 0, 0, 0.06)",
      },
      colors: {
        pink: {
          darker: "#DF4062",
          light: "#FFA4C7",
          lightest: "#FFD2E3",
        },
        blue: {
          darker: "#4096DE",
          light: "#A4E6FF",
          lightest: "#D6E7FD",
        },
        green: {
          darker: "#7B992C",
          light: "#BAD268",
          lightest: "#F5FFD2",
        },
        purple: {
          darker: "#DE40AD",
          light: "#FFA4F7",
          lightest: "#FFD2FB",
        },
        yellow: {
          darker: "#FFC61A",
          light: "#FFF08D",
          lightest: "#FFF7C6",
        },
        grey: {
          lightest: "#F7F7F7",
          lightCard: "#FBFBFB",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        underline: {
          "0%": { left: "-100%", width: "100%" },
          "50%": { left: "0", width: "100%" },
          "100%": { left: "100%", width: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        underline: "underline 4s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
