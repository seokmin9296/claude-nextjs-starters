'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ExamplePage() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* 제목 섹션 */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            예제 페이지
          </h1>
          <p className="text-xl text-slate-600">
            Next.js 15, TypeScript, Tailwind CSS, shadcn/ui의 기본 사용 예제를 보여줍니다.
          </p>
        </div>

        {/* 상호작용 예제 섹션 */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">
              📱 상호작용 컴포넌트 예제
            </h2>

            {/* 카운터 예제 */}
            <div className="mb-8 p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-slate-800">
                카운터
              </h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setCount(count - 1)}
                >
                  감소
                </Button>
                <span className="text-3xl font-bold text-blue-600 min-w-12 text-center">
                  {count}
                </span>
                <Button
                  onClick={() => setCount(count + 1)}
                >
                  증가
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCount(0)}
                  className="ml-4"
                >
                  초기화
                </Button>
              </div>
            </div>

            {/* 입력 필드 예제 */}
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-slate-800">
                입력 필드
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="텍스트를 입력하세요..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button onClick={() => setInputValue('')}>
                  삭제
                </Button>
              </div>
              {inputValue && (
                <p className="mt-4 text-slate-700">
                  입력된 값: <span className="font-semibold">{inputValue}</span>
                </p>
              )}
            </div>
          </div>
        </section>

        {/* 버튼 스타일 예제 섹션 */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">
              🎨 버튼 스타일 예제
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 기본 버튼 */}
              <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-sm font-semibold mb-4 text-slate-700 uppercase">
                  기본 버튼
                </h3>
                <div className="flex gap-2 flex-wrap">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              {/* Outline 버튼 */}
              <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-sm font-semibold mb-4 text-slate-700 uppercase">
                  Outline 버튼
                </h3>
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm">Small</Button>
                  <Button variant="outline">Default</Button>
                  <Button variant="outline" size="lg">Large</Button>
                </div>
              </div>

              {/* Disabled 버튼 */}
              <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-sm font-semibold mb-4 text-slate-700 uppercase">
                  비활성화 버튼
                </h3>
                <div className="flex gap-2 flex-wrap">
                  <Button disabled>Default</Button>
                  <Button variant="outline" disabled>Outline</Button>
                </div>
              </div>

              {/* 버튼 그룹 */}
              <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-sm font-semibold mb-4 text-slate-700 uppercase">
                  버튼 그룹
                </h3>
                <div className="flex gap-2">
                  <Button variant="outline">이전</Button>
                  <Button>다음</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 레이아웃 예제 섹션 */}
        <section>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">
              🏗️ 레이아웃 예제
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {item}
                  </div>
                  <p className="text-slate-600">
                    카드 {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg border border-slate-300">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                💡 팁
              </h3>
              <p className="text-slate-700">
                이 페이지는 Next.js App Router, React Hooks, Tailwind CSS의 기본적인 사용 방법을 보여줍니다.
                src/app/example/page.tsx 파일을 수정하여 예제를 커스터마이징할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 홈으로 돌아가기 */}
        <div className="mt-12 text-center">
          <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← 홈페이지로 돌아가기
          </a>
        </div>
      </div>
    </div>
  )
}
