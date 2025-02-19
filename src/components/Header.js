// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/articles">文章</Link></li>
                    <li><Link to="/about">关于</Link></li>
                    <li><Link to="/contact">联系我</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
