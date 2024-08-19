import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Node.js의 path 모듈을 가져옵니다

export default defineConfig({
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"), // 'src/components' 폴더를 '@components' 별칭으로 사용
            "@pages": path.resolve(__dirname, "src/pages"), // 'src/pages' 폴더를 '@pages' 별칭으로 사용
            "@styles": path.resolve(__dirname, "src/styles"), // 'src/styles' 폴더를 '@styles' 별칭으로 사용
            "@svg": path.resolve(__dirname, "src/assets"), // 'src/assets/icons' 폴더를 '@svg' 별칭으로 사용
            "@hooks": path.resolve(__dirname, "src/hooks"), // 'src/hooks' 폴더를 '@hooks' 별칭으로 사용
        },
    },
    plugins: [react()],
});
