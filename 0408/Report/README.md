# 🗓️ 플래너 웹사이트 (React Planner)

**플래너 웹사이트**는 React와 Tailwind CSS를 사용하여 만든 웹 기반 일정 및 할 일 관리 앱입니다. 사용자는 달력을 통해 일정을 확인하고, 특정 날짜에 개인 일정을 추가하거나 할 일 목록을 손신이 관리할 수 있습니다.

---

## 프로젝트 목적 – _누구에게나 도움이 되는 웹앱_

이 프로젝트는 "**누구에게 도움이 되는 사이트**"를 만들자는 목적 아래 기획되어왔습니다. 다양한 가이어가 필요한 사회의 구역에서 일정을 지키고 할 일을 체계적으로 관리할 수 있도록 도움을 줍니다.

### 이 앱은 이런 분들에게 유용합니다:
- 학생: 과제, 시험, 발표 일정 등을 한눈에 정리
- 직장인: 회의, 프로젝트, 일 만기일 등을 계획적으로 관리
- 일상 사용자: 운동 루틴, 약속, 자기계발 등 개인 시간 관리

> “작고 간단하지만, 매일의 시간을 정리하는 데 지정하는 도구입니다.”

---

## 기능

### 특정 날짜 및 통화 가능한 달력 (`TheCalendar.jsx`)
- 월별 달력 UI 제공
- 이전/다음 달 이동
- 날짜 클릭 → 해당 날짜 일정 표시
- 해당 날짜에 등록된 일정 미리보기 (2개 + 더보기)

### 일정 관리 (`Schedule.jsx`)
- 일정 제목, 시작일, 종료일 입력 후 추가
- 일정 건지/무\uuac70 체크
- 일정 삭제 기능
- 완료 일정은 취소선 표시

### 할 일(게시방지) 관리 (`ToDo.jsx`)
- 할 일 항목 추가, 삭제, 완료 체크
- 완료 항목은 체크바스 + 취소선 표시
- 입력 폼은 토글 방식으로 열고 닫기 가능

---

## 프로젝트 구성

```
src/
├── Planner.jsx         // 전체 페이지 구성 및 상태 관리
├── TheCalendar.jsx     // 달력 콘텐츠
├── Schedule.jsx        // 선택 날짜 일정 관리
└── ToDo.jsx            // 할 일 목록 관리
```

---

## Tailwind CSS 설정 방법

이 프로젝트는 **Tailwind CSS**로 스타일링되어 있습니다.

### 1. Tailwind 처음 설정
```bash
npx tailwindcss init -p
```

### 2. `tailwind.config.js` 예시
```js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 3. CSS 파일에 입력 (ex. `index.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> Tailwind는 빠른 UI 구성과 유지보수에 매워 유니티클래스 기능을 제공합니다.



