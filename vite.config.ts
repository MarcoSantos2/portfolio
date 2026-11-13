import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'render-blocking-entry',
      apply: 'build',
      transformIndexHtml: {
        order: 'post',
        // Vite replaces the source script with a generated entry tag.
        handler: (html) => html.replace(
          '<script type="module" crossorigin src=',
          '<script type="module" blocking="render" crossorigin src=',
        ),
      },
    },
  ],
});
