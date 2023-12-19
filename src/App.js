import React, { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import "./App.css";
import { Dna } from "react-loader-spinner";
function App() {
  const [complete, setcomplete] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setcomplete(!true);
    }, 1000);
  }, []);
  return (
    <>
      {complete ? (
        <div className="row  m-0">
          <Loader />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
