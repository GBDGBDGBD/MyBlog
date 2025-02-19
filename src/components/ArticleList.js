
// src/components/ArticleList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = () => {
    return (
        <section className="blog-content">
            <article className="post">
                <h2>计算机网络基础</h2>
                <p className="post-meta">2025年2月17日 | 作者：高博栋</p>
                <p>计算机网络是指将分布在不同地理位置的计算机通过通信链路连接起来，实现资源共享和信息交流的系统...</p>
                <Link to="/articles/1" className="read-more">阅读全文</Link>
            </article>

            <article className="post">
                <h2>数据结构与算法入门</h2>
                <p className="post-meta">2025年2月16日 | 作者：李明浩</p>
                <p>数据结构和算法是计算机科学的基础。通过高效的数据结构，可以优化算法的执行效率...</p>
                <Link to="/articles/2" className="read-more">阅读全文</Link>
            </article>
        </section>
    );
};

export default ArticleList;
