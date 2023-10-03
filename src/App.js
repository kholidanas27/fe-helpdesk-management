import React from "react";
import Sidebars from "./app/sidebar";
function App() {
  return (
    <div
      id="app"
      style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
    >
      <Sidebars />
      <main>test</main>
    </div>
  );
}

export default App;
