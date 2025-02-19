// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* 背景动画 */}
            <motion.div
                className="background-animation"
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                    duration: 10,
                    ease: 'easeInOut',
                    loop: Infinity,
                }}
            />

            {/* 欢迎标题 */}
            <motion.h1
                className="home-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                欢迎来到 NPUer 的计算机知识博客！
            </motion.h1>

            {/* 动态卡片 */}
            <motion.div
                className="card-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.div className="card" whileHover={{ scale: 1.05 }}>
                    <h2>最新文章</h2>
                    <p>查看我们最新发布的文章，了解前沿的计算机技术。</p>
                </motion.div>

                <motion.div className="card" whileHover={{ scale: 1.05 }}>
                    <h2>技术教程</h2>
                    <p>探索一系列计算机相关的实用教程，提升编程技能。</p>
                </motion.div>

                <motion.div className="card" whileHover={{ scale: 1.05 }}>
                    <h2>博客首页</h2>
                    <p>访问我们的博客首页，浏览更多内容。</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
