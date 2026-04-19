import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "http://localhost:5179/",

  server: {
    port: 5179,   // ✅ THIS controls npm run dev
    strictPort: true,
  },

  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteButton": "./src/RemoteButton.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    target: "esnext",
  },
});