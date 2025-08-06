import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './UserCenter.scss';

export default function UserCenter() {
  return (
    <div className="hfyd-user-center">
      <NavBar />
      <section className="user-info">
        <img src="/assets/avatar-default.png" alt="头像" />
        <div>
          <h3>用户名：testuser</h3>
          <p>手机号：138****8888</p>
        </div>
      </section>
      <section className="user-orders">
        <h4>我的订单</h4>
        {/* 订单列表 mock */}
        <div className="order-list">
          <div className="order-item">订单#001</div>
          <div className="order-item">订单#002</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}