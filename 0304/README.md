## HTML

### Markup Language & Metadata
|구분| 마크업 언어 (Markup Language)| 메타데이터 (Metadata)|
|---|------|------|
|정의| 문서나 데이터를 구조화하고 서식을 지정하는 언어| 데이터 자체가 아닌, 데이터를 설명하는 정보|
|목적| 문서의 구조를 정의하고, 내용의 표현 방식, 기능(링크 , 이미지 등)을 지정| 데이터에 대한 속성, 의미, 관계 등을 설명|
|형식| 태그(tag)나 특정한 문법을 사용하여 구성| 일반적으로 키-값(key-value) 형태로 저장|
|대상| 문서(텍스트, 이미지 등)| 데이터(파일, 이미지, 웹 페이지)|
|예시| HTML, XML, Markdown, LaTeX 등| HTML의 <meta> 태그, EXIF(사진 메타데이터), JSON-LD 등|
|사용 분야| 웹 페이지, 문서 작성, 데이터 구조화| 검색 엔진 최적화(SEO), 데이터 관리, 디지털 아카이빙|

###  MPA vs SPA
|특징|MPA(Multi-page app lifecycle)|SPA(Single-page app lifecycle)|
|---|--------|--------|
|페이지 새로 고침|각 페이지 요청 시 전체 페이지 새로 고침|페이지 새로 고침 없이 콘텐츠만 동적 업데이트|
|사용자 경험|느릴 수 있음 (새 페이지 로딩 시간)|빠르고 매끄러운 사용자 경험|
|서버 요청|	각 페이지마다 서버와의 통신 필요	|초기 페이지 로드 후 API로 데이터 비동기 요청|
|SEO|검색 엔진 최적화(SEO) 용이|SEO가 어려울 수 있음 (SSR 또는 SSG 필요)|
|예시|전통적인 웹사이트, 블로그, 쇼핑몰 등|Gmail, Facebook, Twitter, Google Maps 등|

## Node.js
* 서버 측에서 자바스크립트를 실행할 수 있게 해주는 런타임 환경

### Platform, Environment, Framework, Runtime
|구분| 설명| 예시|
|---|--------|--------|
|Platform| 소프트웨어가 실행될 수 있는 기반 환경| 운영체제 (Windows, macOS, Linux), 클라우드 플랫폼 (AWS, Azure), 웹 플랫폼|
|Environment| 특정 소프트웨어가 실행될 수 있도록 구성된 조건| 개발 환경, 운영 환경, 테스트 환경|
|Framework| 소프트웨어 개발을 위한 뼈대 또는 기반 구조| 웹 프레임워크 (React, Angular, Vue.js), 모바일 프레임워크 (React Native,Flutter)|
|Runtime| 프로그램이 실행되는 동안 필요한 환경| JRE (.NET Framework), Node.js|

|용어| Node.js에서의 의미|
|---|--------|
|Platform| Node.js가 실행되는 OS(Windows, Linux) 또는 배포되는 클라우드(AWS, Azure)|
|Environment| 로컬 개발 환경(VS Code), 실행 환경(Node.js Runtime), 운영 환경(Production)|
|Framework| Express.js (Node.js에서 웹 서버 개발을 쉽게 해줌)|
|Runtime| Node.js Runtime (JavaScript를 서버에서 실행할 수 있도록 제공)|

### 설치 및 실행 방법
1.  node.js 다운로드 : https://nodejs.org/en
2.  Node.js 버전 확인
  *  node -v
  *  npm -v
3.  간단한 Node.js 실행 1
  *  node
  *  console.log("Hello, Node.js!")
4. 간단한 Node.js 실행 2
  *  copy con hello.js
  console.log(“Hello, Node.js!”)
  ^Z
  *  node hello.js

##  React

###  리액트 프로젝트 생성
*  리액트 프로젝트를 만들기 위해 Vite 또는 Create React App (CRA)를 사용할 수 있다.
*  Vite가 속도가 더 빠르므로, 최근에는 Vite가 더 많이 사용
1.  vscode  실행
2.  폴더 생성 및 열기
3.  터미널(^+~)

> npx create-react-app 파일명 --use-npm
> 
> cd 파일명
> 
> npm start

###  JSX
* HTML과 JavaScript를 결합한 문법
* Babel를 이용해서 JavaScript로 변환
* React 요소를 생성하는데 사용

####  JSX 장점
1. 가독성이 좋고 직관적임
2. 코드가 간결하고 유지보수가 쉬움
3. 자바스크립트와 자연스럽게 결합 가능
4. 조건부 렌더링이 쉬움
5. 스타일 및 이벤트 핸들링이 쉬움
