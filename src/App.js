// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Article from './components/Article';
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArticleList from "./components/ArticleList";

const App = () => {
    return (
        <Router basename="/MyBlog">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<ArticleList />} />
                <Route path="/articles/:id" element={<Article />} /> {/* 匹配到 /articles/:id 路径 */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
