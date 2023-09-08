import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

const { peerDependencies, dependencies } = require('./package.json')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({'jsxRuntime': 'classic'}),
    dts({ include: ['src/**/*'] })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      formats: ["es", 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
    },
    /* Do not include dependencies and peerDependencies in final build */
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
      output: { preserveModules: true, exports: 'named'}
    },

    target: 'esnext',
    sourcemap: true
  }
})
