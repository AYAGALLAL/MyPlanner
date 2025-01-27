module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Dark Blue
        secondary: "#3B82F6", // Light Blue
        accent: "#93C5FD", // Sky Blue
        background: "#F3F4F6", // Soft Gray
        text: "#1F2937", // Dark Text
        /*primary: "#ffffff",
        secondary: "#1e3a8a", // Blue
        accent: "#2563eb",   // Lighter Blue*/
      },
    },
  },
  plugins: [],
};

