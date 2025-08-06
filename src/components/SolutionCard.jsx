import React from 'react';
import './SolutionCard.scss';

export default function SolutionCard({ img, title, desc, btn, link }) {
  return (
    <div className="solution-card">
      <img src={img} alt={title} />
      <div className="solution-title">{title}</div>
      <div className="solution-desc">{desc}</div>
      <a href={link} className="solution-btn">{btn}</a>
    </div>
  );
}