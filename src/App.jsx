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
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = async () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/search/:query" element={<SearchResult />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
