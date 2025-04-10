# 📘 React Hooks - useState 정보 수정 README

## 📌 Hook의 등장 배경

- React 처기에는 **함수형 컨포넌트**를 간단한 UI 표현에 사용, 상태 관리 또는 생명 주기(컨포넌트 생성/해제) 처리를 위해 **클래스형 컨포넌트** 사용.
- 클래스형 컨포넌트의 단점:
  - 코드 구성 밀화
  - 재사용성 저항
  - 컴파일 배레이션 없음
  - 최신 기술 적용성 보호
- 이를 보용하고 함수형에서도 상태, 주기 조합을 가능하게 한 기능이 **Hook**

## 🧠 Hook이란?

- 함수형 컨포넌트에서 state와 effect 등을 사용할 수 있게 해주는 함수.
- React v16.8에서 등장
- Hook의 명령은 항상 `use`로 시작
- 대표 함수: `useState`, `useEffect`, `useContext`, `useMemo`, `useRef`, `useCallback`

## ⚠️ Hook 사용 규칙

1. 컨포넌트 최상단에서만 호출 (조건문, 반복문, 중첩 함수 내부에서는 사용 금지)
2. React 함수형 컨포넌트 또는 Custom Hook 내에서만 사용
3. 만약 맞는 상황이 아닌 경우, useMemo를 이용
4. 새로운 컨포넌트로 읽기/쓰기와 관련된 요소를 분리해서 복잡해지는 경우 해결

사용 가상시: [Rules of Hooks](https://ko.legacy.reactjs.org/docs/hooks-rules.html)

---

## 🧹 `useState` 정보 바로 사용

### ✅ 기본 사용법

```jsx
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Click: {count}</button>;
}
```

- `useState(initialState)`는 `[state, setState]`
- `initialState`는 함수형으로도 전달 가능 (`useState(() => heavyCalc())`)

### 파일이 다른 예시

#### 문자열 상태
```jsx
const [text, setText] = useState('hello');
```

#### 객체(object)
```jsx
const [form, setForm] = useState({ name: '', email: '' });
setForm({ ...form, name: 'John' });
```

#### 배열(array)
```jsx
const [list, setList] = useState([]);
setList([...list, newItem]);
```

#### 중차된 객체
```jsx
setPerson({
  ...person,
  address: {
    ...person.address,
    city: 'Seoul'
  }
});
```

### 현전 상태를 기반으로 변경

```jsx
setCount(prev => prev + 1);
```

- 최근 state를 관찰하지 않고 결과를 다룰 수 있는 함수 형으로 전달

---

## 🧪 특정 상태는 이렇게 처리

### 상태가 변경되지 않는다고?

```jsx
obj.x = 10;
setObj(obj); // ❌ React에서 객체 변경 무시
setObj({ ...obj, x: 10 }); // ✅ 새 객체를 전달
```

### 함수를 state로 저장하려고 할 때

```jsx
const [fn, setFn] = useState(() => someFunction);
setFn(() => someOtherFunction);
```

### 무한 레널리링의 원인

```jsx
return <button onClick={handleClick()}>Click</button>; // ❌ 호출
return <button onClick={handleClick}>Click</button>; // ✅ 함수 가상 전달
```

---

## 🚀 고급 핀

### 개수가 크고 무게 계산을 해야 할 경우

```jsx
const [todos, setTodos] = useState(() => createInitialTodos());
```

### Immer를 활용하여 객체/배열 변경 간단화

```jsx
import { useImmer } from 'use-immer';

const [list, updateList] = useImmer(initialList);

updateList(draft => {
  draft[0].seen = true;
});
```

---

## 📎 참고 문서

- [React 공식 useState 문서](https://react.dev/reference/react/useState)
- [React 공식 한국어 문서](https://react-ko.dev/reference/react/hooks)
- [Hooks 개요](https://ko.legacy.reactjs.org/docs/hooks-overview.html)
- [Hooks 규칙](https://ko.legacy.reactjs.org/docs/hooks-rules.html)
- [Updating state with Immer](https://react.dev/learn/updating-objects-in-state#writing-concise-update-logic-with-immer)

