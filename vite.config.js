import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import jsx from "@vitejs/plugin-vue-jsx"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue({

      }),
      jsx(),
      AutoImport({
        resolvers: [VantResolver()]
      }),
      Components({
        resolvers: [VantResolver()]
      }),
  ]
})
