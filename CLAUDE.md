# CLAUDE.md

이 파일은 이 저장소에서 작업할 때 Claude Code(claude.ai/code)에 제공되는 지침입니다.

## 프로젝트 개요

Next.js 15 + Tailwind CSS + shadcn/ui를 기반으로 한 웹 애플리케이션 프로토타이핑용 Starter Kit입니다.

**기술 스택:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui 컴포넌트
- Jest (테스트)

## 프로젝트 구조 및 아키텍처

### 디렉토리 구조

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # 루트 레이아웃 (모든 페이지 포함)
│   ├── globals.css           # 전역 스타일 (Tailwind 설정)
│   ├── page.tsx              # 홈페이지 (/)
│   ├── auth/                 # 인증 관련 라우트
│   │   ├── login/page.tsx    # 로그인 페이지 (/auth/login)
│   │   └── signup/page.tsx   # 회원가입 페이지 (/auth/signup)
│   └── dashboard/page.tsx    # 대시보드 (/dashboard)
│
├── components/               # React 컴포넌트
│   ├── ui/                   # shadcn/ui 기반 기본 컴포넌트
│   │   └── button.tsx        # Button 컴포넌트 (size, variant props)
│   └── navbar.tsx            # 네비게이션바 (모든 페이지 상단)
│
└── lib/                      # 유틸리티 및 공통 함수
    └── utils.ts              # cn() 함수 (clsx + tailwind-merge)
```

### 핵심 아키텍처

**레이아웃 계층:**
- RootLayout(`src/app/layout.tsx`)이 모든 페이지를 감싸고 Navbar 컴포넌트 포함
- 각 페이지는 독립적인 청크로 번들링되어 동적 로딩 지원

**UI 컴포넌트 시스템:**
- `src/components/ui/` 에 shadcn/ui 스타일의 재사용 가능한 컴포넌트 배치
- CVA(class-variance-authority)를 사용한 variant 기반 스타일링
- `cn()` 유틸리티로 Tailwind 클래스 병합 (충돌 해결)

**스타일링 전략:**
- `globals.css`에 CSS 변수로 색상 팔레트 정의 (라이트/다크 모드 지원)
- Tailwind의 `@layer` 지시어로 기본 스타일 적용
- 모든 컴포넌트는 Tailwind 클래스만 사용 (별도 CSS 파일 불필요)

**인증 흐름 (예제):**
- 로그인/회원가입 페이지는 클라이언트 컴포넌트('use client')
- 현재는 로컬 상태 관리 (실제 구현 시 백엔드 API 연결 필요)
- 토큰 저장 및 세션 관리는 미포함 (프로젝트 요구사항에 따라 추가)

## 주요 명령어

```bash
# 개발 서버 시작 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm start

# 전체 프로젝트 린팅
npm run lint

# 모든 테스트 실행
npm test

# 테스트 감시 모드 (파일 변경 감지)
npm run test:watch

# 특정 테스트만 실행
npm test -- path/to/test.test.tsx

# 테스트 커버리지 확인
npm test -- --coverage
```

## 개발 가이드

### 새 페이지 추가

App Router 기반이므로 파일 경로가 URL이 됩니다:

```typescript
// src/app/posts/page.tsx → /posts
export default function PostsPage() {
  return <div>Posts</div>
}

// src/app/posts/[id]/page.tsx → /posts/123
export default function PostPage({ params }: { params: { id: string } }) {
  return <div>Post {params.id}</div>
}
```

### 새 컴포넌트 추가

UI 컴포넌트는 `src/components/ui/`에, 페이지별 컴포넌트는 `src/components/`에 배치:

```typescript
// src/components/ui/card.tsx (재사용 가능한 기본 컴포넌트)
import { cn } from '@/lib/utils'

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('bg-white rounded-lg shadow', className)} {...props} />
}
```

### 스타일링 패턴

Tailwind 클래스 이름 충돌을 피하기 위해 항상 `cn()` 함수 사용:

```typescript
import { cn } from '@/lib/utils'

// 조건부 클래스 안전하게 병합
<div className={cn('p-4', isActive && 'bg-blue-500', 'text-white')} />
```

### 타입스크립트 설정

- `paths` alias: `@/*` → `src/*` (절대 경로 import 지원)
- `strict: true` (엄격한 타입 검사)
- `noUnusedLocals`, `noUnusedParameters` (미사용 변수 감지)

### 테스트 작성

Jest + React Testing Library 사용:

```typescript
// src/components/ui/button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('버튼이 클릭 가능해야 함', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    screen.getByRole('button').click()
    expect(handleClick).toHaveBeenCalled()
  })
})
```

## 주의사항

**클라이언트/서버 컴포넌트:**
- 상태(useState, useEffect)를 사용하려면 `'use client'` 선언 필수
- 서버 컴포넌트(기본값)는 데이터베이스 접근 등 서버 전용 작업 가능

**환경 변수:**
- `.env.local` 파일 생성 후 환경 변수 추가 (git 제외)
- 클라이언트에서 접근하려면 `NEXT_PUBLIC_` 접두사 필수

**빌드 최적화:**
- 큰 라이브러리는 동적 import 고려: `const Component = dynamic(() => import('@/...'))`
- 이미지는 `next/image` 컴포넌트 사용 (자동 최적화)

## 추가 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com)
- [shadcn/ui 컴포넌트 라이브러리](https://ui.shadcn.com)
- [App Router 마이그레이션 가이드](https://nextjs.org/docs/app/building-your-application/upgrading)
