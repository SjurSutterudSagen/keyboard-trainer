import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        tsconfigPaths({
            ignoreConfigErrors: true,
            projects: ['./tsconfig.json']
        }),
        react()
    ],
    test: {
        environment: 'jsdom',
        exclude: ['**/node_modules/**', '**/e2e/**', '**/zmk/**'],
        setupFiles: ['./src/test/setup.ts'],
        globals: true,
    },
});
