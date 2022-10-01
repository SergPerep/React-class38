import { Jack, Goose, Anne } from "./components/bigHeads";
// import { useState, useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const [windowWidth, windowHeight] = useWindowSize();
  let bigHead = <Goose />;
  if (windowWidth > 1000) {
    bigHead = <Jack />;
  } else if (windowWidth < 700) {
    bigHead = <Anne />;
  }

  return (
    <div className="App">
      <div className="container">
        {bigHead}
        <p>
          {windowWidth}px / {windowHeight}px
        </p>
      </div>
    </div>
  );
}

export default App;
