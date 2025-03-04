import React from "react";
import ReactDOM from "react-dom/client";
function App() {
return React.createElement(
"div",
null,
React.createElement("h1", null, "Hello, JSX!"),
React.createElement("p", null, "This is a JSX example.")
);
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));

export default App;
