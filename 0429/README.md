# 📘 React 이벤트 핸들링 & 조건부 렌더링 정리 (README)

React에서 이벤트를 처리하고, 조건에 따라 UI를 렌더링하는 기법은 사용자 인터페이스의 핵심입니다. 이 문서는 `Event Handler`와 `Conditional Rendering`을 중심으로 정리한 가이드입니다.

---

## 📍 이벤트 핸들링 (Event Handling)

### ✅ 개념

* **Event**: 사용자의 상호작용(클릭, 입력 등)
* **Event Handler**: 이벤트 발생 시 실행되는 함수
* DOM과 달리, React에서는 JSX에서 `camelCase` 방식으로 이벤트를 정의합니다.

```jsx
<button onClick={handleClick}>클릭</button>
```

### ✅ 이벤트 객체 (`SyntheticEvent`)

React는 `SyntheticEvent`라는 래퍼 객체를 전달하며, 이는 모든 브라우저에서 동일한 인터페이스를 제공합니다.

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### ✅ 클래스 컴포넌트와 이벤트

* 클래스에서는 `this` 바인딩 필요

```jsx
this.handleClick = this.handleClick.bind(this);
```

* 혹은 클래스 필드 문법

```jsx
handleClick = () => { ... }
```

### ✅ 이벤트 핸들러에 인자 전달

* 함수형 컴포넌트: 화살표 함수 사용

```jsx
<button onClick={() => handleClick("홍길동")}>클릭</button>
```

* 클래스 컴포넌트: `bind` 사용

```jsx
<button onClick={this.handleClick.bind(this, "홍길동")}>클릭</button>
```

### ✅ 상태 변경과 이벤트

```jsx
const [count, setCount] = useState(0);
function handleClick() {
  setCount(count + 1);
}
```

### ✅ 기본 동작 방지 & 전파 중지

```jsx
// 기본 동작 방지
function handleSubmit(e) {
  e.preventDefault();
}

// 이벤트 전파 중지
function handleChildClick(e) {
  e.stopPropagation();
}
```

### ✅ useCallback으로 핸들러 최적화

```jsx
const handleClick = useCallback(() => {
  setCount((prev) => prev + 1);
}, []);
```

---

## 📍 조건부 렌더링 (Conditional Rendering)

### ✅ 개념

* 조건에 따라 다른 UI를 보여주는 기법
* 로그인 상태, 메시지 존재 여부 등 UI 변경에 활용

### ✅ Truthy / Falsy

```js
false, 0, "", null, undefined, NaN // falsy
"hello", [], {}, function(){}       // truthy
```

### ✅ 연산자 활용

```js
// OR 연산
console.log(null || "대체값"); // "대체값"

// AND 연산
console.log(true && "출력됨"); // "출력됨"

// Null 병합 연산자
user ?? "기본 사용자"
```

### ✅ JSX 내 조건 처리 방식

#### 1. 삼항 연산자

```jsx
<h1>{isLoggedIn ? "환영합니다!" : "로그인이 필요합니다."}</h1>
```

#### 2. && 논리 연산자

```jsx
{hasMessage && <p>새로운 메시지가 도착했습니다.</p>}
```

#### 3. if 문

```jsx
if (isLoggedIn) return <Welcome />; 
return <PleaseLogin />;
```

#### 4. 컴포넌트 분리

```jsx
return isLoggedIn ? <Welcome /> : <PleaseLogin />;
```

#### 5. 즉시 실행 함수 (IIFE)

```jsx
{(() => {
  if (!user) return <p>사용자 없음</p>;
  return <p>{user.name}</p>;
})()}
```

#### 6. switch 문

```jsx
switch (status) {
  case 'success': return <p>성공!</p>;
  case 'error': return <p>오류!</p>;
}
```

---

## 🧪 실습 예시

### 🔘 버튼 토글 (Function Component)

```jsx
const [isConfirmed, setIsConfirmed] = useState(false);
<button onClick={() => setIsConfirmed(!isConfirmed)}>
  {isConfirmed ? "확인됨" : "확인하기"}
</button>
```

### 🔘 로그인 여부로 렌더링 제어

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
<h1>{isLoggedIn ? "환영합니다!" : "로그인 해주세요."}</h1>
<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
  {isLoggedIn ? "로그아웃" : "로그인"}
</button>
```

---

## ⚙️ DOM 이벤트 vs React 이벤트

| 항목     | DOM 이벤트                         | React 이벤트             |
| ------ | ------------------------------- | --------------------- |
| 이벤트 등록 | `addEventListener`              | JSX 속성 (`onClick`)    |
| 네이밍    | 소문자 (click)                     | 카멜케이스 (onClick)       |
| 이벤트 객체 | `MouseEvent`, `KeyboardEvent` 등 | `SyntheticEvent`      |
| 이벤트 제거 | 수동으로 제거 필요                      | 컴포넌트 언마운트 시 자동 제거     |
| 이벤트 위임 | 수동 설정                           | 자동 위임 (document에서 관리) |
| 최적화    | 없음                              | `useCallback` 사용 가능   |

---

## 📝 참고 링크

* React 공식 문서 (이벤트): [https://legacy.reactjs.org/docs/events.html](https://legacy.reactjs.org/docs/events.html)
* 조건부 렌더링 문서: [https://ko.legacy.reactjs.org/docs/conditional-rendering.html](https://ko.legacy.reactjs.org/docs/conditional-rendering.html)
* JavaScript Truthy/Falsy: [https://developer.mozilla.org/ko/docs/Glossary/Truthy](https://developer.mozilla.org/ko/docs/Glossary/Truthy)

