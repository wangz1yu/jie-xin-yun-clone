import React from 'react';
import './ContactSection.scss';

export default function ContactSection() {
  return (
    <section className="hfyd-contact">
      <h2>联系我们</h2>
      <div className="contact-info">
        <div className="contact-item"><strong>联系电话：</strong>0551-10086</div>
        <div className="contact-item"><strong>地址：</strong>合肥市政务区xxx路xx号</div>
        <div className="contact-item"><strong>邮箱：</strong>service@hfydmobi.com</div>
        <div className="contact-item">
          <strong>官方公众号：</strong>
          <img src="/assets/qrcode.png" alt="二维码" />
        </div>
      </div>
    </section>
  );
}