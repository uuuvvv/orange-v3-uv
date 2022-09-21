import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    {
      // 支持 Markdown 文件加载
      include: [/\.vue$/],
    }
  )],
  css: {
    preprocessorOptions: {
      scss: {
        // 两种方式都可以
        additionalData: '@import "./assets/scss/index.scss";'
        // additionalData: '@use "@/assets/scss/global.scss" as *;'
      }
    }
  },

})
