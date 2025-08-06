import React, { useState } from 'react';
import './Carousel.scss';

const slides = [
  {
    img: '/assets/banner1.jpg',
    title: '数字化转型，赋能企业高质量发展',
    desc: '合肥移动助力企业数智升级，激发创新活力',
    btn: '了解详情',
    link: '/solutions'
  },
  {
    img: '/assets/banner2.jpg',
    title: '5G专网，安全高效的行业解决方案',
    desc: '为政企客户提供定制化5G专网服务',
    btn: '立即体验',
    link: '/products'
  }
];

export default function Carousel() {
  const [idx, setIdx] = useState(0);
  return (
    <section className="hfyd-carousel">
      <img src={slides[idx].img} alt="banner" className="carousel-img" />
      <div className="carousel-content">
        <h1>{slides[idx].title}</h1>
        <p>{slides[idx].desc}</p>
        <a href={slides[idx].link} className="carousel-btn">{slides[idx].btn}</a>
      </div>
      <div className="carousel-controls">
        <button onClick={()=>setIdx((idx+slides.length-1)%slides.length)}>&lt;</button>
        <button onClick={()=>setIdx((idx+1)%slides.length)}>&gt;</button>
      </div>
      <div className="carousel-dots">
        {slides.map((s, i) => (
          <span className={i===idx?'active':''} onClick={()=>setIdx(i)} key={i}></span>
        ))}
      </div>
    </section>
  );
}