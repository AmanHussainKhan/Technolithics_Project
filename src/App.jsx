import React, { createContext, useContext, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Youtube from "./Pages/Youtube";
import Facebook from "./Pages/Facebook";
import Instagram from "./Pages/Instagram";
import Twitter from "./Pages/Twitter";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfServices from "./Pages/TermsOfServices";
import JweleryItem from "./Pages/JweleryItem";
import ProductPage from "./Pages/ProductPage";

const data = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/youtube",
    element: (
      <>
        <Youtube />
      </>
    ),
  },
  {
    path: "/facebook",
    element: (
      <>
        <Facebook />
      </>
    ),
  },
  {
    path: "/instagram",
    element: (
      <>
        <Instagram />
      </>
    ),
  },
  {
    path: "/twitter",
    element: (
      <>
        <Twitter />
      </>
    ),
  },
  {
    path: "/privacypolicy",
    element: (
      <>
        <PrivacyPolicy />
      </>
    ),
  },
  {
    path: "/termsofservices",
    element: (
      <>
        <TermsOfServices />
      </>
    ),
  },
  {
    path: "/jweleryitem",
    element: (
      <>
        <JweleryItem />
      </>
    ),
  },
  {
    path: "/productpage",
    element: (
      <>
        <ProductPage />
      </>
    ),
  },
]);

const App = () => {
  const [productCount, setProductCount] = useState(11);
  return (
    <>
      <data.Provider value={productCount}>
        <RouterProvider router={router} />
      </data.Provider>
    </>
  );
};

export default App;
export { data };
