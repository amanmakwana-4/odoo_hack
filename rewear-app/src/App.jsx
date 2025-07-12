import React from "react";
import { Routes, Route } from "react-router-dom";
import ListItem from "../src/pages/ListItem";
import Home from "../src/pages/Home";
import BrowseItems from "../src/pages/BrowseItems";
import UserDash from "../src/pages/UserDash";
import ItemDetail from "../src/pages/ItemDetail";
import PrivateRoute from "../src/components/PrivateRoute";
import LoginPage from "../src/pages/Login";
import SignupPage from "../src/pages/Signup";
import AdminItemsPage from "./components/AdminItemsPage";
import ReportPage from "./components/ReportPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListItem />} />
        <Route path="/browse" element={<BrowseItems />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <UserDash />
            </PrivateRoute>
          }
        />
        <Route path="/detail" element={<ItemDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin/items" element={<PrivateRoute><AdminItemsPage /></PrivateRoute>} />
        <Route path="/reports" element={<PrivateRoute><ReportPage /></PrivateRoute>} />

      </Routes>
    </>
  );
}

export default App;
