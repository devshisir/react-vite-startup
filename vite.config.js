import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env.VITE_API_BASE_URL": JSON.stringify(process.env.VITE_KEY),
  },
});
