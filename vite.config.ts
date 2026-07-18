import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/jspdf') || id.includes('node_modules/jspdf-autotable')) {
              return 'jspdf-vendor';
            }
            if (id.includes('node_modules/@google/genai')) {
              return 'genai-vendor';
            }
            if (id.includes('node_modules/motion')) {
              return 'motion-vendor';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'lucide-vendor';
            }
            if (/[\\/]node_modules[\\/](react|react-dom)[\\/]/.test(id)) {
              return 'react-vendor';
            }
          },
        },
      },
    },
  };
});
