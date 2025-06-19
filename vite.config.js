import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()], server: {
        host: true,
        port: 5173,
        historyApiFallback: true,
        strictPort: true, cors: true,
        // Use this for port forwarding (Only for local development)
        allowedHosts: ["4e32-61-16-134-190.ngrok-free.app"]
    }
})
