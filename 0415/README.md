# React Hooks 정리
## 📌 useEffect

### ✅ 설명:
- 함수형 컴포넌트에서 side effect(부수 효과)를 처리하기 위해 사용되는 Hook입니다.
- 대표적인 예: API 호출, 이벤트 리스너 등록, 타이머 설정 등 컴포넌트 외부와의 상호작용
- `useEffect`는 컴포넌트가 렌더링될 때마다 실행되며, 두 번째 인자로 의존성 배열을 전달하여 실행 조건을 지정할 수 있습니다.
- 반환된 함수는 컴포넌트가 언마운트될 때 실행되며, 정리(clean-up) 작업에 사용됩니다.

### 🔍 특징:
- 의존성 배열을 통해 실행 조건 제어 가능
- 마운트/언마운트 시 특정 작업 실행 가능
- 렌더링 후 비동기 로직 또는 외부 API 호출 등에 적합

### ✅ 예시:
```jsx
useEffect(() => {
  console.log("컴포넌트가 렌더링됨");
  return () => console.log("컴포넌트 언마운트됨");
}, [count]);
```

---

## 📌 useMemo

### ✅ 설명:
- 연산량이 많은 계산 결과를 캐싱하여 렌더링 성능을 최적화합니다.
- 의존성 배열 값이 바뀌지 않으면 메모된 값을 재사용합니다.

### 🔍 특징:
- 값(value)을 메모이제이션함
- 렌더링 중 반복 연산 방지 가능
- 의존성 배열이 없으면 의미 없음

### ✅ 예시:
```jsx
const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

---

## 📌 useCallback

### ✅ 설명:
- `useMemo`와 유사하지만 **함수 자체**를 메모이제이션합니다.
- 부모 컴포넌트가 리렌더링될 때 자식 컴포넌트에 전달하는 함수의 참조를 유지하여 불필요한 렌더링을 방지합니다.

### 🔍 특징:
- 함수(callback)를 메모이제이션함
- React.memo와 함께 성능 최적화에 유용
- 자식 컴포넌트에 props로 함수 전달 시 유용함

### ✅ 예시:
```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

---

## 📌 useReducer

### ✅ 설명:
- 상태가 여러 단계에 걸쳐 변하거나 업데이트 로직이 복잡한 경우에 유용한 상태 관리 Hook입니다.

### 🔍 특징:
- 상태 업데이트 로직을 함수로 외부화 가능
- 액션 객체를 통해 명시적인 상태 전이 가능
- Redux 유사 구조

### ✅ 예시:
```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---

## 📌 useContext

### ✅ 설명:
- 전역 상태를 여러 컴포넌트에서 공유할 수 있게 해주는 Hook입니다.

### 🔍 특징:
- props drilling 문제 해결
- Context Provider 하위 컴포넌트 어디서든 값 접근 가능
- 전역 설정값(테마, 로그인 등) 관리에 유리

### ✅ 예시:
```jsx
const { isDark, setIsDark } = useContext(ThemeContext);
```

---

## 📌 useRef

### ✅ 설명:
- DOM 요소에 접근하거나 렌더링 간 유지되는 데이터를 다룰 수 있는 Hook입니다.

### 🔍 특징:
- DOM 직접 조작 가능
- 렌더링과 무관한 값 저장
- `.current`를 통해 접근

### ✅ 예시:
```jsx
const inputRef = useRef();
<input ref={inputRef} />
```

---

## 📌 forwardRef

### ✅ 설명:
- 부모 컴포넌트에서 자식 컴포넌트의 DOM에 접근할 수 있도록 하는 고차 함수입니다.

### 🔍 특징:
- 함수형 컴포넌트에 ref 전달 가능
- 외부 라이브러리 연동, 포커스 제어에 유리
- 내부 요소에 접근 가능하도록 설계

### ✅ 예시:
```jsx
const MyInput = forwardRef((props, ref) => <input ref={ref} {...props} />);
```

---

## 📌 useTransition

### ✅ 설명:
- 긴 렌더링 작업을 낮은 우선순위로 처리하여 UI 응답성을 유지할 수 있는 Hook입니다.

### 🔍 특징:
- 상태 업데이트를 비동기 트랜지션으로 분리
- 입력 지연 최소화
- isPending 상태로 로딩 여부 확인 가능

### ✅ 예시:
```jsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setValue(newValue);
});
```

---

## 📌 Custom Hook (커스텀 훅)

### ✅ 설명:
- 공통 로직을 재사용하기 위해 개발자가 직접 만드는 사용자 정의 Hook입니다.

### 🔍 특징:
- 이름은 반드시 `use`로 시작해야 함
- 내부에 다른 Hook 포함 가능
- 비즈니스 로직 재사용성 증가

### ✅ 예시:
```jsx
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  const increase = () => setCount(c => c + 1);
  return [count, increase];
}
```

---

## 📌 Hooks 사용 규칙

### ✅ 규칙 요약:
- Hook은 함수형 컴포넌트 또는 커스텀 Hook의 최상위 레벨에서만 호출해야 합니다.
- 조건문, 반복문, 중첩 함수 내에서 호출하면 안 됩니다.
- 항상 동일한 순서로 실행되어야 리액트가 어떤 상태에 어떤 Hook이 연결되었는지 추적할 수 있습니다.



