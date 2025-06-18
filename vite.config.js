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
        allowedHosts: ["0fb2-2406-7400-c8-2677-e07f-264f-9c06-23cf.ngrok-free.app"]
    }
})
