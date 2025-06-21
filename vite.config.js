import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/AppwriteBlog_app",
});
// This configuration file sets up a Vite project with React and Tailwind CSS.
// It specifies the use of the React plugin for Vite and the Tailwind CSS plugin for styling.
// The base path is set to "/AppwriteBlog_app", which is useful for deploying the app in a subdirectory.
// The `defineConfig` function is used to create a configuration object that Vite will use to build the project.
// The `react` plugin enables support for React JSX syntax, while the `tailwindcss` plugin integrates Tailwind CSS for utility-first styling.
