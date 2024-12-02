import React, { createContext, useContext } from "react";
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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
