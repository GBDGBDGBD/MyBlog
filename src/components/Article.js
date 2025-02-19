import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const Article = () => {
    const { id } = useParams();  // 获取文章的 ID
    const [content, setContent] = useState('');

    useEffect(() => {
        // 动态导入 Markdown 文件
        if (id) {
            import(`../articles/${id}.md`)  // 动态导入指定 ID 的 Markdown 文件
                .then(module => {
                    setContent(module.default);  // module.default 是文件的内容
                })
                .catch(error => {
                    console.error('加载文章失败:', error);
                    setContent('文章不存在');
                });
        }
    }, [id]);

    return (
        <section className="post-detail">
            <h2>文章内容</h2>
            <ReactMarkdown>{content}</ReactMarkdown>
            <Link to="/" className="back-link">返回首页</Link>
        </section>
    );
};

export default Article;
