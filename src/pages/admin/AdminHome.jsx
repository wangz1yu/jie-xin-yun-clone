import React from 'react';
import AdminNavBar from '../../components/AdminNavBar';
import './AdminHome.scss';

export default function AdminHome() {
  return (
    <div className="hfyd-admin-home">
      <AdminNavBar />
      <div className="admin-panels">
        <a href="/admin/products" className="panel">产品管理</a>
        <a href="/admin/users" className="panel">用户管理</a>
        <a href="/admin/orders" className="panel">订单管理</a>
      </div>
    </div>
  );
}