# 📘 React 기초 학습 정보 (Chapter 9–10)

## 목차

1. [Lists & Keys](#1-lists--keys)
2. [Forms](#2-forms)
3. [Lifting State Up (상호 들어올린 상태)](#3-lifting-state-up-상호-들어올린-상태)
4. [Composition vs Inheritance (합성과 상속)](#4-composition-vs-inheritance-합성과-상속)

---

## 1. Lists & Keys

### 🔹 리스트 렌더링과 `map()`

* JavaScript `map()` 함수를 사용해서 배열을 컨포넌트로 변환

```jsx
const names = ["Alice", "Bob", "Charlie"];

return (
  <ul>
    {names.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
);
```

### 🔹 Key의 중요성

* React는 리스트 항목 시청을 위해 `key` 사용 필요
* index보다는 고유 ID 사용 권장

```jsx
{users.map((user) => (
  <li key={user.id}>{user.name}</li>  // ✅ 권장
))}
```

### ✅ 실습: `AttendanceBook.jsx`

```jsx
const students = [
  { id: 1, name: "Inje" },
  { id: 2, name: "Steve" },
  ...
];

function AttendanceBook() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}
```

---

## 2. Forms

### 🔹 Controlled Components

```jsx
const [value, setValue] = useState("");

<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
```

### 🔹 다양한 입력 요소

* `textarea`, `select`, `checkbox`, `radio` 등도 `useState`로 관리
* 여러 입력 필드는 객체에 모은 state로 관리

```jsx
const [formData, setFormData] = useState({ name: "", email: "" });

<input name="name" value={formData.name} onChange={handleChange} />
```

### ✅ 실습: `SignUp.jsx`

```jsx
function SignUp() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChangeName} />
      <select value={gender} onChange={handleChangeGender}>
        <option value="남자">남자</option>
        <option value="여자">여자</option>
      </select>
    </form>
  );
}
```

---

## 3. Lifting State Up (상호 들어올린 상태)

### 🔹 개념

* 여러 자식 컨포넌트가 동일한 데이터를 사용할 때 상위 컨포넌트로 state를 들어올린다.

### 🔹 예제

```jsx
function Parent() {
  const [text, setText] = useState("");

  return (
    <div>
      <ChildA text={text} setText={setText} />
      <ChildB text={text} />
    </div>
  );
}
```

### ✅ 실습: `Calculator.jsx`

섭시 ↔ 화시 번호 변환기

```jsx
<TemperatureInput
  scale="c"
  temperature={celsius}
  onTemperatureChange={handleCelsiusChange}
/>
<TemperatureInput
  scale="f"
  temperature={fahrenheit}
  onTemperatureChange={handleFahrenheitChange}
/>
```

---

## 4. Composition vs Inheritance (합성과 상속)

### 🔹 합성 (Composition)

* `children`를 활용해 자유리 건설

```jsx
function Card({ children }) {
  return <div>{children}</div>;
}
```

### 🔹 특수화 (Specialization)

* 범위적인 컨포넌트의 구조는 복잡하게, 일부만 커서버

```jsx
function Dialog({ title, message }) { ... }
function WarningDialog() {
  return <Dialog title="경고!" message="위험!" />;
}
```

### 🔹 고차 컨포넌트 (HOC)

```jsx
function withLogger(WrappedComponent) {
  return function(props) {
    console.log("렌더링 중:", WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}
```

---


## 🔗 참고 문서

* [React - Lists and Keys](https://ko.legacy.reactjs.org/docs/lists-and-keys.html)
* [React - Lifting State Up](https://ko.legacy.reactjs.org/docs/lifting-state-up.html)
* [React - Composition vs Inheritance](https://ko.legacy.reactjs.org/docs/composition-vs-inheritance.html)
