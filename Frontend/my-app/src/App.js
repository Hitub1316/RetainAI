import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Navbar2 from "./components/Navbar2";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Working from "./pages/Working";
import Pricing from "./pages/Pricing";
import FeaturesPage from "./pages/Features";
import Resources from "./pages/Resources";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* ==================== PUBLIC ROUTES (with Navbar 1) ==================== */}
                <Route path="/" element={<Layout><LandingPage /></Layout>} />
                <Route path="/login" element={<Layout><Login /></Layout>} />
                <Route path="/signup" element={<Layout><SignUp /></Layout>} />
                <Route path="/working" element={<Layout><Working /></Layout>} />
                <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
                <Route path="/features" element={<Layout><FeaturesPage /></Layout>} />
                <Route path="/resources" element={<Layout><Resources /></Layout>} />

                {/* ==================== PROTECTED ROUTES (with Navbar 2) ==================== */}
                <Route path="/home" element={<Navbar2><Home /></Navbar2>} />
                <Route path="/dashboard" element={<Navbar2><Dashboard /></Navbar2>} />
                <Route path="/report" element={<Navbar2><Report /></Navbar2>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;