import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import dynamicImport from 'vite-plugin-dynamic-import';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dynamicImport(),
    chunkSplitPlugin({
      strategy: 'single-vendor',
      customChunk(context) {
        const { file } = context;
        console.log({ file });

        return undefined;
      },
      customSplitting: {
        'tailwind': [/tailwind/],
        'radix-ui': [/@radix-ui/],
        'lucide-react': [/lucide-react/],
        'framer-motion': [/framer-motion/],
        recharts: [/recharts/],
        'react-error-boundary': [/react-error-boundary/],
        vendor: [/node_modules/],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: true,
    cssCodeSplit: true,
    rollupOptions: {
      input: './index.html',
      output: {
        manualChunks: undefined,
      },
    },
  },
});
