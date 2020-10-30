import React, { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";

function App() {
  let pages = [
    { readableName: "Items", url: "items" },
    { readableName: "Accessories", url: "accessories" },
    { readableName: "Shipping", url: "shipping" },
    { readableName: "Submit", url: "submit" },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const setPage = (newPageNum) => {
    setCurrentPage(newPageNum);
    window.localStorage.setItem("currentPage", JSON.stringify(newPageNum));
  };
  //didmount
  useEffect(() => {
    let lSpage = window.localStorage.getItem("currentPage");
    if (lSpage !== currentPage) {
      //do something
      setCurrentPage(JSON.parse(currentPage));
    }
    console.log("in use effect");
  }, [currentPage]);

  return (
    <div className="App container">
      <Header
        pages={pages}
        currentPage={currentPage}
        setPage={setPage}
      ></Header>
      <Body
      currentPage={currentPage} ></Body>
    </div>
  );
}

export default App;
