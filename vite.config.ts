import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const viewBuild =()=>({  plugins: [react()],})

// https://vite.dev/config/
export default defineConfig(()=>(viewBuild()))
