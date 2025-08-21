

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#1e40af",
        success: "#16a34a",
        warning: "#facc15",
        danger: "#dc2626",
        gray: "#6b7280",
        "light-gray": "#e5e7eb",
      },
    },
  },
   plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // can change to "corporate", "cupcake", etc.
  },
};
