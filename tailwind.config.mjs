/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headerButton: "#D1F5FF", //Light Cyan
        headerButtonHover: "#3F63B5", //Free Speech Blue
      },
      fontFamily: {
        Exo: ["Exo", "sans-serif"],
        Cedarville: ["Cedarville Cursive", "cursive"],
      },
    },
  },
  plugins: [],
};
