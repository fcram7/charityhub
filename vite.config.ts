import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ 
      algorithm: 'brotliCompress',
      deleteOriginalAssets: false,
      include: /\.(html|xml|css|json|js|ts|tsx|mjs|svg)$/
    })
  ],

  // optimizeDeps: {
  //   include: ["react-icons/fa6", "react-icons/rx"]
  // },

  build: {
    rollupOptions: {
      treeshake: "smallest"
    }
  },
})
