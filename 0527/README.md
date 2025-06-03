
# 📘 Web Programming - React Router 정리

## 📌 라우팅(Routing)이란?

* 웹 앱에서 URL에 따라 적절한 페이지를 보여주는 기능
* 단일 페이지 또는 여러 페이지 구성 가능

### 예시 페이지

* 글쓰기 페이지
* 포스트 목록 페이지
* 포스트 읽기 페이지

라우팅 시스템을 활용하면 각 페이지 컴포넌트를 나눠 관리 가능

---

## 📌 SPA (Single Page Application)

* 한 개의 HTML 페이지로 구성
* 최초 1회만 HTML을 받아온 후, 데이터만 받아와 화면 업데이트
* URL 주소만 변경되며, 실제로는 페이지 이동이 없음 (History API 사용)

---

## 📌 프로젝트 초기 설정

```bash
npx create-react-app router-tutorial
cd router-tutorial
yarn add react-router-dom # or npm i react-router-dom
```

### `src/index.js`에서 라우터 적용

```jsx
import { BrowserRouter } from 'react-router-dom';
...
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## 📌 기본 페이지 컴포넌트 만들기

`src/pages/Home.js`

```jsx
const Home = () => (
  <div>
    <h1>홈</h1>
    <p>가장 먼저 보여지는 페이지입니다.</p>
  </div>
);
```

`src/pages/About.js`

```jsx
const About = () => (
  <>
    <h1>소개</h1>
    <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
  </>
);
```

---

## 📌 Route 설정

`App.js`

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

---

## 📌 Link 컴포넌트

```jsx
<Link to="/about">소개</Link>
```

* `a` 태그 대신 사용, 새로고침 없이 경로만 변경됨

---

## 📌 URL 파라미터

`/profiles/:username`

```jsx
const params = useParams();
const profile = data[params.username];
```

## 📌 쿼리스트링 (QueryString)

```jsx
const location = useLocation();
console.log(location.search);
```

* 또는 `useSearchParams`로 더 편하게 다룸

```jsx
const [searchParams, setSearchParams] = useSearchParams();
const detail = searchParams.get('detail');
```

---

## 📌 중첩된 라우트

```jsx
<Route path="/articles" element={<Articles />}>
  <Route path=":id" element={<Article />} />
</Route>
```

`Articles.js`에서 `<Outlet />` 사용

---

## 📌 공통 레이아웃 컴포넌트

```jsx
const Layout = () => (
  <div>
    <header>Header</header>
    <Outlet />
  </div>
);
```

```jsx
<Route element={<Layout />}>
  <Route path="/" element={<Home />} />
</Route>
```

---

## 📌 index props

```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
</Route>
```

* `index`는 `path="/"`와 동일

---

## 📌 useNavigate

* Link 없이 페이지 이동 시 사용

```jsx
const navigate = useNavigate();
navigate('/articles');
```

* `navigate('/articles', { replace: true })` : 기록을 남기지 않음

---

## 📌 NavLink

* 현재 선택된 링크 스타일링 가능

```jsx
<NavLink to="/articles/1" style={({ isActive }) => isActive ? { color: 'green' } : undefined}>게시글 1</NavLink>
```

---

## 📌 NotFound 페이지

* 존재하지 않는 경로 처리

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 📌 Navigate 컴포넌트

* 컴포넌트 렌더 시 리다이렉트

```jsx
if (!isLoggedIn) return <Navigate to="/login" replace />;
```

---

## 📌 참고 자료

* [React Router 공식 문서](https://reactrouter.com/en/6.23.1)
* [벨로퍼트 블로그 튜토리얼](https://velog.io/@velopert/react-router-v6-tutorial)
* [생활코딩 라우터 강의](https://www.opentutorials.org/course/4609/30207)
* [위키북스 React Router](https://wikibook.github.io/react/router.html)
