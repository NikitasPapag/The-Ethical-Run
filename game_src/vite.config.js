import { defineConfig } from 'vite';

export default defineConfig({
    // Ensures built assets load from /game/assets/... when served by Express
    base: '/game/',
    build: {
        // Outputs the compiled game directly into Express's public/game folder
        outDir: '../public/game',
        // Automatically wipes old index-XXXX.js files before every build
        emptyOutDir: true,
    }
});