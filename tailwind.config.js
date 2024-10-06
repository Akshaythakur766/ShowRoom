/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode via a class
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primary: "#6b5b95",   // Soft purple
        primaryDark: "#4e3f70", // Darker shade for hover effect
        secondary: "#f1c1d6", // Faded pink (soft blush)
        secondaryDark: "#d09abc", // Darker shade for hover effect
        background: "#f0f4f8", // Very light gray/blue
        foreground: "#3c3c3c", // Dark gray for readable text

        // Dark theme colors
        darkPrimary: "#9a57e3", // Bright purple for dark mode
        darkPrimaryDark: "#6a3e94", // Darker shade for dark mode hover
        darkSecondary: "#f8b8cd", // Vibrant soft blush for dark mode
        darkSecondaryDark: "#d09abc", // Darker shade for dark mode hover
        darkBackground: "#1c1b29", // Deep dark purple/gray
        darkForeground: "#eaeaea", // Soft light gray for text in dark mode
      },
    },
  },
  plugins: [],
};
