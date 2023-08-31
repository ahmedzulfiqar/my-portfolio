import React, { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import { Dna } from "react-loader-spinner";
function App() {
  const [complete, setcomplete] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setcomplete(!true);
    }, 2000);
  }, []);
  return (
    <>
      {complete ? (
        <div className="row divs">
          <div className="col-12 text-center align-self-center text-center">
            <Dna
              visible={true}
              height="150"
              width="150"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
            <br />
          </div>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
