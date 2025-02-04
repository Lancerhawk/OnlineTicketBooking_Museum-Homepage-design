import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './components/AboutPage/AboutPage';
import GuideBotPage from './components/GuideBotPage/GuideBotPage';
import HelpCenterPage from './components/HelpCenterPage/HelpCenterPage';
import HomePage from './components/HomePage/HomePage';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/guidebot" element={<GuideBotPage />} />
                <Route path="/helpcenter" element={<HelpCenterPage />} />
            </Routes>
        </Router>
    );
};

export default App;
