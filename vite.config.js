import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages(프로젝트 페이지)는 항상 /저장소이름/ 하위에 배포됩니다.
// 로컬·미리보기: base '/'
// CI 배포: VITE_BASE_PATH=/Ventura/ 처럼 환경변수로 넘깁니다.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: false
  }
})
