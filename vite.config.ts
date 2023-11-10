import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'PhoneInput',
      fileName: 'phone-input',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'phone-input.css';
          }
          return assetInfo.name;
        },
      },
    },
  },
})
