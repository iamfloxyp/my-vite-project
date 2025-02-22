import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@fortawesome/react-fontawesome',
         '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons'
      ],
    },
  },
});

