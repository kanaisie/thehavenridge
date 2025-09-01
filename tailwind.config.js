/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", md: "2rem" } },
    extend: {
      colors: {
        brand: {
          50:  "hsl(var(--brand-50))",
          100: "hsl(var(--brand-100))",
          200: "hsl(var(--brand-200))",
          300: "hsl(var(--brand-300))",
          400: "hsl(var(--brand-400))",
          500: "hsl(var(--brand-500))",
          600: "hsl(var(--brand-600))",
          700: "hsl(var(--brand-700))",
          800: "hsl(var(--brand-800))",
          900: "hsl(var(--brand-900))",
          DEFAULT: "hsl(var(--brand-500))",
        },
        accent: {
          500: "hsl(var(--accent-500))",
          600: "hsl(var(--accent-600))",
          DEFAULT: "hsl(var(--accent-500))",
        },
      },
      backgroundImage: {
        // tasteful, subtle background
        "spotlight":
          "radial-gradient(1200px 600px at 0% 0%, hsl(var(--brand-100)) 0%, transparent 60%), radial-gradient(900px 500px at 100% 100%, hsl(var(--accent-500)/0.12) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

