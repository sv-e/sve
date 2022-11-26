/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  mode: "jit",
  darkMode: "class", // or "media" or "class"
  theme: {
    extend: {
      container: {
        padding: "15px"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        cursive: ["Audiowide", "cursive"]
      },
      colors: {
        sev: {
          "gray-100":     "rgba(var(--color-gray-100), 1)",
          "gray-200":     "rgba(var(--color-gray-200), 1)",
          "gray-300":     "rgba(var(--color-gray-300), 1)",
          "dark-1":       "rgba(var(--color-dark), 0.01)",
          "dark-2":       "rgba(var(--color-dark), 0.02)",
          "dark-3":       "rgba(var(--color-dark), 0.03)",
          "dark-4":       "rgba(var(--color-dark), 0.04)",
          "dark-5":       "rgba(var(--color-dark), 0.05)",
          "dark-7":       "rgba(var(--color-dark), 0.07)",
          "dark-27":      "rgba(var(--color-dark), 0.27)",
          "dark-70":      "rgba(var(--color-dark), 0.7)",
          "dark":         "rgba(var(--color-dark), 1)",          
          "light":        "rgba(var(--color-light), 1)",
          "light-7":      "rgba(var(--color-light), 0.07)",
          "berry-light":  "rgba(var(--color-berry-light), 1)",
          "berry-gray":   "rgba(var(--color-berry-gray), 1)",
          "berry-dark":   "rgba(var(--color-berry-dark), 1)",          
          "purple":       "rgba(var(--color-purple), 1)",
          "purple-27":    "rgba(var(--color-purple), 0.27)",
          "orange":       "rgba(var(--color-orange), 1)",
          "black":        "rgba(var(--color-black), 1)",
          "white":        "rgba(var(--color-white), 1)",
          "white-7":      "rgba(var(--color-white), 0.07)",
          "white-10":     "rgba(var(--color-white), 0.1)"
        },
        neo: {          
          "dark-0":      "rgba(var(--color-neo-dark), 0)",
          "dark-10":     "rgba(var(--color-neo-dark), 0.1)",
          "dark-17":     "rgba(var(--color-neo-dark), 0.17)",
          "dark-27":     "rgba(var(--color-neo-dark), 0.27)",
          "dark-40":     "rgba(var(--color-neo-dark), 0.40)",
          "dark-87":     "rgba(var(--color-neo-dark), 0.87)",
          "dark":        "rgba(var(--color-neo-dark), 1)",
          "black":       "rgba(var(--color-neo-black), 1)",
          "black-92":    "rgba(var(--color-neo-black), 0.92)",
          "light":       "rgba(var(--color-neo-light), 1)",
          "light-0":     "rgba(var(--color-neo-light), 0)",
          "light-10":    "rgba(var(--color-neo-light), 0.1)",
          "light-17":    "rgba(var(--color-neo-light), 0.17)",
          "light-27":    "rgba(var(--color-neo-light), 0.27)",
          "light-40":    "rgba(var(--color-neo-light), 0.40)",
          "light-87":    "rgba(var(--color-neo-light), 0.87)",
          "white":       "rgba(var(--color-neo-white), 1)"
        }
      },
      spacing: {
        "12.7": "3.25rem"
      },
      boxShadow: {
        "switch-inner-dark": "inset -.25rem -.25rem .5rem rgba(var(--color-white), .7), inset .25rem .25rem .875rem rgba(var(--color-dark), .07)",
        "switch-inner-light": "inset .25rem .25rem .875rem rgba(var(--color-white), .07), inset -.25rem -.25rem .5rem rgba(var(--color-dark), .52)",
        "modal": "0 1rem 3rem rgba(var(--color-black), .17)"
      },
      screens: {
        "hmd": { "raw": "(min-width:768px),(max-height: 768px)" },
        "hlg": { "raw": "(min-width:768px),(max-height: 992px)" },
        "hlg-xs": { "raw": "(max-width:576px)" }
      }
    }
  }
};
