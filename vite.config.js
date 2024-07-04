import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve("./src/pages/Home/Home.jsx"), // Resolve paths relative to the current directory
        menu: resolve("./"),
        contact: resolve("./contact.html"),
        products: resolve("./products.html"),
        addToCart: resolve("./addToCart.html"),
      },
    },
  },
});
