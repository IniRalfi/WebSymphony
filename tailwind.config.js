/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                rotate: {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
            },
            animation: {
                "rotate-slow": "rotate 8s linear infinite",
                "fade-in-custom": "fadeIn 1s forwards",
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
