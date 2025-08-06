import React, { useState } from 'react';
import './BannerSection.css';

export default function BannerSection() {
  const [tab, setTab] = useState('calculator');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <section className="banner-section">
      <div className="banner-left">
        <h1>
          专注于灵活用工场景下的<br />
          共享经济平台
        </h1>
        <p>致力于企业降本增效的专业财税服务平台</p>
      </div>
      <div className="banner-right">
        <div className="banner-card">
          <div className="banner-card-header">
            <span>节薪云共享平台</span>
            <div className="banner-card-tabs">
              <span className={tab==='calculator'?'active':''} onClick={()=>setTab('calculator')}>灵工计算器</span>
            </div>
          </div>
          <div className="banner-card-body">
            <input type="text" placeholder="您的姓名" value={name} onChange={e=>setName(e.target.value)} />
            <input type="text" placeholder="联系方式" value={phone} onChange={e=>setPhone(e.target.value)} />
            <button className="banner-card-btn">立即体验</button>
          </div>
          <div className="banner-card-footer">
            2025年平台月度综合交易量
            <span className="highlight">26.8亿+</span>
          </div>
        </div>
      </div>
    </section>
  );
}