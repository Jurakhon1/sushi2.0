import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      screens: {
        sm: "340px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        tablet: "720px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
