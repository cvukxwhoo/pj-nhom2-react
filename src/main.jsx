import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./pages/Destination";
import Listing from "./pages/Listing";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="destination" element={<Destination />} />
            <Route path="listing" element={<Listing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
  </React.StrictMode>
);
