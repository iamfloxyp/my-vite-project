import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/my-vite-app',
  plugins: [react()],
  // root:'./',
  // build: {
  //   rollupOptions: {
  //     external: ['@fortawesome/react-fontawesome', '@fortawesome/fontawesome-svg-core',
  //       '@fortawesome/free-solid-svg-icons'
  //     ],
  //   },
  // },
});

