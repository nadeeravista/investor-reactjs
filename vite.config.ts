import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { URL, fileURLToPath } from 'url';

const eslintParams = {
  exclude: ['**/*.svg', './src/api-client/**/*'],
  include: ['./src/**/*'],
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // default settings on build (i.e. fail on error)
      ...eslint(eslintParams),
      apply: 'build',
    },
    {
      ...eslint({
        ...eslintParams,
        failOnWarning: false,
        failOnError: false,
      }),
      apply: 'serve',
      enforce: 'post',
    },
  ],
  resolve: {
    alias: {
      '@components': fileURLToPath(
        new URL('./src/components', import.meta.url)
      ),
      '@custom-types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@context': fileURLToPath(new URL('./src/context', import.meta.url)),
    },
  },
});
