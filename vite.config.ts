import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/index.scss";' // 全局公共样式
     }
    }
  },
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
})
