import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://placehold.co/44x44?text=Logo" alt="节薪云" className="navbar-logo" />
        <span className="navbar-title">灵活用工财税服务平台</span>
      </div>
      <div className="navbar-menu">
        <a href="/">首页</a>
        <a href="/hot">热门服务</a>
        <a href="/industry">行业解决方案</a>
        <a href="/support">服务与支持</a>
        <a href="/tax">税筹资讯</a>
        <a href="/about">关于平台</a>
      </div>
      <div className="navbar-right">
        <input className="navbar-search" placeholder="请输入关键词" />
        <a href="/service" className="navbar-icon" title="全国服务">🌐</a>
        <a href="/phone" className="navbar-icon" title="电话">📞</a>
        <a href="/login" className="navbar-login">企业登录</a>
      </div>
    </nav>
  );
}