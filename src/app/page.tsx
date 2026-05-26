import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          Next.js Starter Kit
        </h1>

        <p className="text-xl text-slate-600 mb-8">
          Next.js 15 + Tailwind CSS + shadcn/ui를 기반으로 한 빠른 웹 애플리케이션 프로토타이핑용 Starter Kit
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-left">
            <h2 className="text-lg font-semibold mb-3">🚀 기술 스택</h2>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>✓ Next.js 15 (App Router)</li>
              <li>✓ TypeScript</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ shadcn/ui 컴포넌트</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-left">
            <h2 className="text-lg font-semibold mb-3">📦 포함 사항</h2>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>✓ 기본 레이아웃</li>
              <li>✓ 인증 예제</li>
              <li>✓ UI 컴포넌트</li>
              <li>✓ Jest 테스트 설정</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/example">
            <Button size="lg">
              예제 페이지
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button size="lg">
              로그인 예제
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline">
              대시보드
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            빠른 시작: <code className="bg-slate-200 px-2 py-1 rounded">npm run dev</code> 명령으로 개발 서버를 시작하세요.
          </p>
        </div>
      </div>
    </div>
  )
}
