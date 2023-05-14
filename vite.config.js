import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { svgSpritemap } from 'vite-plugin-svg-spritemap';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgSpritemap({
            pattern: 'src/assets/icons/**/*.svg',
            prefix: 'icon',
        })
    ],
})

