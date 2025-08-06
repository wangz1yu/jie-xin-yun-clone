import React from 'react';
import './NewsCard.scss';

export default function NewsCard({ title, desc, date, link }) {
  return (
    <div className="news-card">
      <div className="news-title">{title}</div>
      <div className="news-date">{date}</div>
      <div className="news-desc">{desc}</div>
      <a href={link} className="news-btn">查看详情</a>
    </div>
  );
}