import React from 'react';
import NewsCard from './NewsCard';
import './NewsSection.scss';

const newsList = [
  {
    title: '合肥移动助力某企业数字化升级',
    desc: '近日，合肥移动为本地企业部署5G专网，提升生产效率。',
    date: '2025-07-15',
    link: '/news/1'
  },
  {
    title: '物联网平台上线新功能',
    desc: '我司IoT平台支持更多设备协议，提升数据采集能力。',
    date: '2025-07-10',
    link: '/news/2'
  },
];

export default function NewsSection() {
  return (
    <section className="hfyd-news">
      <h2>新闻动态</h2>
      <div className="news-list">
        {newsList.map((n, i) => <NewsCard key={i} {...n} />)}
      </div>
    </section>
  );
}