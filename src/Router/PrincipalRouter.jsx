import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import PropertiesPage from "../pages/PropertiesPage";
import PropertyDetailsPage from "../pages/PropertyDetailsPage";
import HomePage from "../pages/HomePage";
import SiteFooter from "../components/SiteFooter";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import useScrollToTop from "../hooks/useScrollToTop";

const ScrollToTop = () => {
    useScrollToTop();
    return null; // This component doesn't render anything visually
}

export const PrincipalRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/properties" element={<PropertiesPage/>}/>
                <Route path="/property/:id" element={<PropertyDetailsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <SiteFooter />
        </BrowserRouter>
    )
} 