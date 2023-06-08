import React, { useEffect } from "react";
import { fetchDataFromApi } from "./helper/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

import Header from "./components/molecules/header/header";
import Footer from "./components/molecules/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import MoviePage from "./pages/movies/movies";
import PageNotFound from "./pages/404/PageNotFound";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = async () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  return <div>Total pages: {url?.total_pages}</div>;
};

export default App;
