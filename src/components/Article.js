// src/components/Post.js
import React from 'react';
import { useParams } from 'react-router-dom'; // 引入 useParams

const Post = () => {
    // 使用 useParams 获取路由参数
    const { id } = useParams();

    // 模拟文章数据
    const posts = {
        1: {
            title: '计算机网络基础',
            content: '计算机网络是指将分布在不同地理位置的计算机通过通信链路连接起来，实现资源共享和信息交流的系统...'
        },
        2: {
            title: '数据结构与算法入门',
            content: '数据结构和算法是计算机科学的基础。通过高效的数据结构，可以优化算法的执行效率...'
        }
    };

    const post = posts[id]; // 根据 id 获取对应的文章数据

    return (
        <section className="post-detail">
            <h2>{post?.title}</h2> {/* 使用可选链（?.）避免 post 为 undefined 时报错 */}
            <p>{post?.content}</p>
        </section>
    );
};

export default Post;
