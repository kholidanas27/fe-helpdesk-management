import React from "react";
import Sidebar from "./app/sidebar";
function App() {
  return (
    <div
      id="app"
      style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
    >
      <Sidebar />
      <main>test</main>
    </div>
  );
}

export default App;
