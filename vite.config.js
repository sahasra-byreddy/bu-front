import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// I'm planning on generating the files from a server (ssr), not sure if I'll do it yet.
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  // server: {
  //   middlewareMode: true,
  // },
  plugins: [react()],
  build: {
    outDir: "build/client",
    // ssr: "src/entry-server.tsx",
  },
});
