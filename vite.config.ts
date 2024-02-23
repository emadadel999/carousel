import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

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

  build: {
    lib: {
        // src/indext.ts is where we have exported the component(s)
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "carousel-vue3-ts",
        // the name of the output files when the build is run
        fileName: "carousel-vue3-ts",
    },
    rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ["vue", "vue-router"],
        output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
                vue: "Vue",
            },
        }
    },
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
