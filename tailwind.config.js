module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#111119",
                primary: "#00ff94",
                main: "#ffffff",
                mainDark: "#606061",
            },
        },
    },
    plugins: [require("tailwindcss-magic")],
};
