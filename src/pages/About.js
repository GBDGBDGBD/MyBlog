import React from 'react';
import { motion } from 'framer-motion'; // 动画库
import '../index.css';
const About = () => {
    return (
        <div className="about-container">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="about-title"
            >
                关于我们
            </motion.h1>
            <p className="about-description">欢迎来到我们的关于页面。在这里，您可以了解我们的使命、愿景和团队。</p>

            <section className="about-section">
                <h2>我们的使命</h2>
                <p>我们致力于分享计算机科学、技术和其他领域的知识，启发并教育未来的科技领袖。</p>
            </section>

            <section className="about-section">
                <h2>我们的愿景</h2>
                <p>通过创新和教育，推动科技的发展，为社会做出积极的贡献。</p>
            </section>



            <footer>
                <p>© 2025 你的公司，保留所有权利。</p>
            </footer>
        </div>
    );
};

export default About;