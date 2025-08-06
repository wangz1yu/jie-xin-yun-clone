import React, { useState } from 'react';
import './HomeAdmin.scss';

export default function HomeAdmin() {
  const [bannerTitle, setBannerTitle] = useState('合肥移动 - 智能数字化服务');
  const [bannerDesc, setBannerDesc] = useState('创新科技，赋能未来');
  const [bannerImg, setBannerImg] = useState('/assets/banner.jpg');

  const handleSave = () => {
    // 保存逻辑，实际可调用后端接口
    alert('首页信息已保存！');
  };

  return (
    <div className="home-admin">
      <h2>首页管理</h2>
      <div className="form-group">
        <label>Banner 图</label>
        <input type="text" value={bannerImg} onChange={e=>setBannerImg(e.target.value)} />
        <img src={bannerImg} alt="banner" style={{width: '300px', margin: '16px 0'}} />
      </div>
      <div className="form-group">
        <label>主标题</label>
        <input type="text" value={bannerTitle} onChange={e=>setBannerTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label>副标题</label>
        <input type="text" value={bannerDesc} onChange={e=>setBannerDesc(e.target.value)} />
      </div>
      <button className="admin-btn" onClick={handleSave}>保存</button>
    </div>
  );
}