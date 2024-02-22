import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(<any>{
  plugins: [
    vue(),
  ],
  optimizeDeps: {
    include: [
        'vue',
        '@vueuse/core',
    ],
    exclude: [
    ],
  },
  css: {
    preprocessorOptions: {
        scss: {
            includePaths: [
                'node_modules',
                'src/styles',
            ],
            additionalData: `
                @use "sass:math";
                @use "sass:color" as colorHelpers;
            `,
        },
    },
    loaderOptions: {
        scss: {
            additionalData: ` @import "@/styles/main"; `,
        },
    },
  },

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  cssPreprocessOptions: {
      sass: {
          includePaths: [
              'node_modules',
              'src/styles',
          ],
      },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
