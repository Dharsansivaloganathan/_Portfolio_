// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'skills': "url(/skillsBg.png)",
        'skill-card': "url(/light-wood.svg)",
      },
      fontSize: {
        'bg-font': 'calc(5rem + 5vw)',
        'medium-bg-font': 'calc(3.5rem + 3vw)',
      },
      textColor: {
        'grey-bg-text': 'rgba(252, 246, 244, 0.2)'
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%) rotate(-90deg)", opacity: "0" },
          "100%": { transform: "translateX(0) rotate(-90deg)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%) rotate(90deg)", opacity: "0" },
          "100%": { transform: "translateX(0) rotate(90deg)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bubbleUp: {
          "0%": { transform: "translateY(20px) scale(0.5)", opacity: "0" },
          "60%": { transform: "translateY(-5px) scale(1.1)", opacity: "0.8" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        slideInBottom: "slideInBottom 0.8s ease-out forwards",
        slideInTop: "slideInTop 0.8s ease-out forwards",
        bubbleUp: "bubbleUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
