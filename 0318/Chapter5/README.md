# 컴포넌트와 Props

### 컴포넌트
- 리액트에서는 모든 페이지가 컴포넌트로 구성되어 있고, 하나의 컴포넌트는 또 다른 여러 개의 컴포넌트의 조합으로 구성될 수 있음
- 리액트 컴포넌트의 역할
  - 어떠한 속성들을 입력으로 받아서 그에 맞는 리액트 엘리먼트를 생성해여 리턴해 주는 것
  - 화면에 나타날 엘리먼트를 생성
  - 
### Props
- Property, 리액트 컴포넌트의 속성
- 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
- Props의 특징 - 읽기 전용
  - 모든 리액트 컴포넌트는 그들의 props에 관해서 Pure 함수 같은 역할을 해야함
  - 모든 리액트 컴포넌트는 props를 직접 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과를 보여줘야 함
- Props 사용법
  - 키-값 쌍의 형태
  - 문자열 이외에 정수, 변수, 다른 컴포넌트 등이 들어갈 경우 중괄호({ }) 이용
```bash
function App(props){
  return (
    <Profile
      name="이름"
      introductio="안녕하세요."
      viewCount={1500}
    />
  );
}
```

### 컴포넌트 만들기
- 컴포넌트의 종류
  - 함수 컴포넌트를 개선하여 주로 사용
- 함수 컴포넌트
```bash
function Welcome(props){
  return <h1>안녕, {props.name}</h1>;
}
```
- 클래스 컴포넌트
```bash
class Welcome extends React.Component {
  render() {
    return <h1>안녕, {this.props.name}</h1>;
  }
}
```
- 컴포넌트 이름 짓기
  - 컴포넌트의 이름은 항상 대문자로 시작해야 됨
  - 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문
    - 'div'나 'span': React.createElement()로 전달
    - '<Foo />': React.createElement(Foo)로 전달
    ```bash
    // HTML div 태그로 인식
    const element = <div />;
    // Welcome이라는 리액트 컴포넌트로 인식
    const element = <Welcome name="인제"/>;
    ```
- 컴포넌트 렌더링
  - Virtual DOM에서 실제 DOM으로 이동하는 과정
    ```bash
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

    const element = <Welcome name="인제" />;
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
    ```
    
### 컴포넌트 합성
- 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
```bash
function Welcome(props){
  return  <h1>Hello, {props.name}</h1>;
}

function App(props){
  return (
    <div>
      <Welcome name="Mike" />
      <Welcome name="Steve" />
      <Welcome name="Jane" />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### 컴포넌트 추출
- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
- 기능 단위로 구분하는 것이 좋음
- 곧바로 재사용이 가능한 형태로 추출하는 것이 좋음
