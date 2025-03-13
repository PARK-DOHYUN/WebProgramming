# 0311

## JSX
### JSX는 무엇인가?
JSX는 자바스크립의 확장 문법으로 JavaScript와 XML/HTMl을 합친 문법
> const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;

로 시용 가능

JSX는 html 코드를 createElement() 함수를 사용하는 코드로 변환한다

### JSX의 장점
- 코드가 간결해짐
- 가독성 향상
- injection Attack 해킹 방법을 방어함
[ Ex) 아이디를 입력하는 창에 자바스크립트 코드를 넣어 실행되도록 하는 해킹 ]

### JSX 사용법

<code>
  const name = '소플';
  const element = &lt;h1&gt;안녕, {name}&lt;/h1&gt;;

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(element);
</code>
HTML과 JavaScript가 섞인 형태로 작성하면서 코드 중간에 중괄호를 사용해서 변수 또는 함수를 사용


## Element
### Element의 정의
- 리액트 앱을 구성하는 가장 작은 블록들
- 리액트의 Element는 우리 눈에 실제로 보이는 것을 기술함

리액트 Element는 자바스크립트 객체 형태로 존재 <= 이 객체를 만드는 역할이 createElement() 함수

### Element의 특징
- 불변성
- Element 생성 후 children 이나 attributes를 바꿀 수 없다
- 새로운 Element를 만들어서 기존 Element와 바꿔치기
- 변경된 부분을 계산하고 해당부분만 다시 렌더링
