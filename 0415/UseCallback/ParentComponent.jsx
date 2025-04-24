import { useState } from "react";

function ParentComponent(props) {

  const [count, setCount] = useState(0);

  //const handleClick = (event) => {};
  const handleClick = useCallback((event) => {}, []);
  
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}
