import React from "react";
import Nav from "./Page/Nav";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./Page/Home";
const App = () => {
  return (
    <div>
      <Nav />
      <Layout>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
