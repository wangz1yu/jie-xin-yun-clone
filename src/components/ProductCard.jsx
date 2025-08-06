import React from 'react';
import './ProductCard.scss';

export default function ProductCard({ img, title, desc, btn, link }) {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <div className="product-title">{title}</div>
      <div className="product-desc">{desc}</div>
      <a href={link} className="product-btn">{btn}</a>
    </div>
  );
}