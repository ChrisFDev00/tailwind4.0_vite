import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: 3036,
  },
})
