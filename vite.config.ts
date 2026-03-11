import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'packages'),
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 组件库打包配置
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BusinessUiLib',
      fileName: (format) => `business-ui-lib.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      // 外部依赖，不打进库里，交给使用方项目提供
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
    },
  },
})

