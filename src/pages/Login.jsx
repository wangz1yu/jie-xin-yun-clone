import React, { useState } from 'react';
import './Login.scss';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="hfyd-login">
      <h2>用户登录</h2>
      <form>
        <input placeholder="用户名" value={username} onChange={e=>setUsername(e.target.value)} />
        <input type="password" placeholder="密码" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">登录</button>
      </form>
      <a href="/register">没有账号？去注册</a>
    </div>
  );
}