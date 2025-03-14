/** @type {import('tailwindcss').Config} */
export const content = [
    './app/**/*.{js,ts,jsx,tsx}', // if you’re using the `/app` directory (Next 13+)
    './pages/**/*.{js,ts,jsx,tsx}', // if you’re still using the `/pages` directory
    './components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
    extend: {
        colors: {
            black: 'var(--black)',
            primary: 'var(--primary)',
            dark_green: 'var(--dark-green)',
        }
    },
};
export const plugins = [];
  