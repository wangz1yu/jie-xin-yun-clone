import React from 'react';
import './ServiceHighlights.css';

const highlights = [
  { icon: '/assets/icon-pay.png', title: '薪酬代发', desc: '零工工资结算，解决企业发放难题' },
  { icon: '/assets/icon-tax.png', title: '个税代缴', desc: '享税收优惠政策，大幅降低个税成本' },
  { icon: '/assets/icon-platform.png', title: '正规平台', desc: '国家资质，税务局授权，充分保障企业及个人权益' },
  { icon: '/assets/icon-legal.png', title: '合法合规', desc: '国家支持共享经济发展，四流合一，全程可追溯' }
];

export default function ServiceHighlights() {
  return (
    <section className="service-highlights">
      <div className="highlight-list">
        {highlights.map((item, i) => (
          <div className="highlight-card" key={i}>
            <img src={item.icon} alt={item.title} width={42} height={42} />
            <div className="highlight-title">{item.title}</div>
            <div className="highlight-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}