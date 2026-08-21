import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ServiceSelection from "./pages/ServiceSelection";
import ReviewBooking from "./pages/ReviewBooking";
import PickDate from "./pages/PickDate";

import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Page 1 */}
        <Route
          path="/"
          element={<ServiceSelection />}
        />


        {/* Page 2 */}
        <Route
          path="/review"
          element={<ReviewBooking />}
        />


        {/* Page 3 */}
        <Route
          path="/date"
          element={<PickDate />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;