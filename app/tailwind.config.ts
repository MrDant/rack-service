import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "teal-blue": {
          "50": "#e9fffe",
          "100": "#c7fffd",
          "200": "#97fffc",
          "300": "#4ffffd",
          "400": "#00f5ff",
          "500": "#00d7f6",
          "600": "#00aace",
          "700": "#0086a6",
          "800": "#056b85",
          "900": "#084c61",
          "950": "#003a4e",
        },
      },
    },
  },
};
