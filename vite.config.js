vascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/shopping-list/', // Добавьте эту строчку (с названием вашего репозитория)
})