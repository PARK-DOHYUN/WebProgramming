
## 💠 설치 및 실행

```bash
npx create-react-app mashup-todolist
cd mashup-todolist
npm install styled-components react-icons
```

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── TodoTemplate.js
│   ├── TodoHead.js
│   ├── TodoList.js
│   ├── TodoItem.js
│   └── TodoCreate.js
├── TodoContext.js
└── App.js
```

---

## ✨ 주요 컨포넌트 설명

### 1. `TodoTemplate`

* 전체 레이아웃 정의
* 중앙 정렬된 흑색 박스를 그림자와 함께 렌더링

### 2. `TodoHead`

* 오늘 날짜, 요일, 남은 할 일 개수 표시
* `useTodoState()`를 사용해 context에서 상태 받아오기

### 3. `TodoList`

* `todos` 배열을 받아 `TodoItem`들을 렌더링

### 4. `TodoItem`

* 각 할 일 항목 렌더링
* 체크/삭제 기능 포함
* `React.memo`로 불필요한 리렌더링 방지

### 5. `TodoCreate`

* 새 할 일 추가 입력 폼
* `useState`, `useTodoDispatch`, `useTodoNextId` 사용

---

## 🧐 상태 관리 - Context API

### `TodoContext.js` 내 구조

```jsx
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
```

### 제공되는 컨퍼턴 Hook

```jsx
export function useTodoState()
export function useTodoDispatch()
export function useTodoNextId()
```

→ 내부에서 `useContext()`를 사용하며, Provider로 감사지지 않으면 에러 발생 처리 추가됨.

---

## 📌 주요 기능 요약

* 날짜 및 요일 자동 표시 (`Date.toLocaleDateString`)
* 할 일 생성, 완료 체크, 삭제
* `styled-components`로 스타일 일원화
* 컨포넌트 분리 및 성능 최적화 (React.memo)
* `Context API`로 상태 전역 관리 및 dispatch 기능 공유

---
