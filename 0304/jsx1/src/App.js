import React from "react";
import ReactDOM from "react-dom/client";


function App() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a JSX example.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default App;
