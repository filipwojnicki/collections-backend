import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "../../pages/AdminPage";
import AuthPage from "../../pages/AuthPage";
import CollectionPage from "../../pages/CollectionPage";

import Main from "../../pages/Main";

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/AdminPage" element={<AdminPage  />} />
                <Route path="/MainPage" element={<Main />} />
                <Route path="/CollectionPage" element={<CollectionPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteApp;
