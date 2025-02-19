import React from 'react';
import { motion } from 'framer-motion'; // 动画库
import '../index.css';
const Contact = () => {
    return (
        <div className="about-container">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="about-title"
            >
                联系方式
            </motion.h1>
            <p className="about-description">欢迎来到我们的联系方式页面。您可以通过以下途径联系我们。</p>

            <section className="about-section">
                <h2>邮箱</h2>
                <p>3127518780@qq.com</p>
            </section>

            <section className="about-section">
                <h2>电话</h2>
                <p>17795896566</p>
            </section>



            <footer>
                <p>© 2025 你的公司，保留所有权利。</p>
            </footer>
        </div>
    );
};

export default Contact;