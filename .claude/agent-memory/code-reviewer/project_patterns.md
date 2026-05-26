---
name: project_patterns
description: 이 프로젝트의 아키텍처 패턴 및 자주 발생하는 코드 이슈
metadata:
  type: project
---

## 프로젝트 아키텍처

- Next.js 15 App Router 기반, 서버 컴포넌트가 기본값
- 클라이언트 상태(useState 등) 사용 시 `'use client'` 선언 필수
- UI 컴포넌트는 `src/components/ui/`, 페이지 컴포넌트는 `src/app/` 하위에 배치
- shadcn/ui 패턴: CVA + `cn()` 유틸리티 조합으로 스타일링

## 자주 발견되는 이슈

1. 내부 링크에 `<a>` 대신 `Link` 미사용 (next/link)
2. `input` 접근성 레이블(`<label>` 또는 `aria-label`) 누락
3. 카운터 등 상태 업데이트 시 함수형 업데이트(`prev => prev + 1`) 미사용
4. .claude/commands 커스텀 커맨드의 파일 생성 경로가 App Router 구조와 불일치할 수 있음

## 커스텀 커맨드 위치

- `.claude/commands/*.md` 파일로 관리
- PowerShell 스크립트 기반
- add-example 커맨드: `src/example/` 에 생성하나 App Router 구조상 `src/app/{name}/page.tsx` 가 올바른 경로

**Why:** 2026-05-26 코드 리뷰에서 발견된 반복 패턴 기록.
**How to apply:** 향후 리뷰 시 동일 이슈 빠르게 식별.
