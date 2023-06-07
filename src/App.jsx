import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./helper/api";

function App() {
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((result) => {
      console.log(result);
    });
  };

  return <div>APP</div>;
}

export default App;
