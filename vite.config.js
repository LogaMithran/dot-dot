import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()], server: {
        host: true,
        port: 5173,
        strictPort: true, cors: true,
        // Use this for port forwarding (Only for local development)
        allowedHosts: ["0250-2406-7400-c8-cc62-43f9-3ab8-bf21-10c6.ngrok-free.app"]
    }
})
