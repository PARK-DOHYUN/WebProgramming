import React, { useState, useCallback } from "react";

function Child2({ onClick }) {

  console.log("Child 컴포넌트 렌더링됨");

  return <button onClick={onClick}>버튼 클릭</button>;
}
export default function Child2App() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("버튼 클릭됨");
  }, []); 

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <Child2 onClick={handleClick} />
    </div>
  );
}
