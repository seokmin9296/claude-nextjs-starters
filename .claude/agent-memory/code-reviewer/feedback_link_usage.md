---
name: feedback_link_usage
description: Next.js 내부 링크는 반드시 next/link의 Link 컴포넌트를 사용해야 함
metadata:
  type: feedback
---

내부 페이지 이동 시 `<a href>` 태그 대신 `next/link` 의 `Link` 컴포넌트를 사용해야 한다.

**Why:** `<a>` 태그는 전체 페이지 새로고침을 유발하여 클라이언트 사이드 라우팅의 이점을 잃는다. example/page.tsx 에서 홈으로 돌아가는 링크에 `<a>` 를 사용한 사례가 발견됨.

**How to apply:** 코드 리뷰 시 `<a href="/">` 또는 내부 경로를 가리키는 `<a>` 태그를 발견하면 `Link` 로 교체 권고.
