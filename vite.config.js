import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    host: '0.0.0.0', // Allow access from any IP
    port: 5173, // You can keep this port, or change it if needed
  },
});
