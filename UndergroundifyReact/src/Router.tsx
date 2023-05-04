import React from "react";
import { Route, Routes } from "react-router-dom";
import TrendingPage from "./Pages/Trending/TrendingPage";
import RecommendPage from "./Pages/Recommend/RecommendPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Trending" element={<TrendingPage></TrendingPage>}></Route>
      <Route path="/Recommend" element={<RecommendPage />}></Route>
      <Route path="/Profile"></Route>
    </Routes>
  );
};

export default AppRouter;
