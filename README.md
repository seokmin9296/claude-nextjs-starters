# Next.js Starter Kit

Next.js 15 + Tailwind CSS + shadcn/ui를 기반으로 한 빠른 웹 애플리케이션 프로토타이핑용 Starter Kit

## 🚀 기술 스택

- **Next.js 15** - React 기반 프로덕션급 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트
- **Jest** - 단위 테스트 프레임워크

## 📦 포함 사항

- ✅ 기본 레이아웃 및 네비게이션
- ✅ 인증 예제 (로그인/회원가입)
- ✅ 대시보드 페이지
- ✅ 반응형 디자인
- ✅ TypeScript 설정
- ✅ Jest 테스트 설정

## 🏗️ 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈페이지
│   ├── globals.css         # 전역 스타일
│   ├── auth/
│   │   ├── login/page.tsx  # 로그인 페이지
│   │   └── signup/page.tsx # 회원가입 페이지
│   └── dashboard/page.tsx  # 대시보드 페이지
├── components/
│   ├── ui/
│   │   └── button.tsx      # Button 컴포넌트
│   └── navbar.tsx          # 네비게이션바
└── lib/
    └── utils.ts            # 유틸리티 함수
```

## 🛠️ 설치 및 실행

### 필수 사항
- Node.js 18.x 이상

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 애플리케이션을 확인할 수 있습니다.

## 📝 주요 명령어

```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# ESLint 실행
npm run lint

# 테스트 실행
npm test

# 테스트 감시 모드
npm run test:watch
```

## 🎨 UI 컴포넌트

이 프로젝트는 shadcn/ui 기반의 재사용 가능한 컴포넌트를 제공합니다:

- **Button** - 다양한 스타일의 버튼 컴포넌트

필요에 따라 추가 컴포넌트를 설치할 수 있습니다:

```bash
npx shadcn-ui@latest add [component-name]
```

## 🔐 인증 예제

로그인 및 회원가입 페이지가 포함되어 있습니다. 실제 인증 기능을 구현하려면:

1. 백엔드 API 엔드포인트 설정
2. 상태 관리 라이브러리 추가 (Redux, Zustand 등)
3. 토큰 저장 및 검증 로직 구현

## 📚 추가 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com)

## 📄 라이선스

MIT License
