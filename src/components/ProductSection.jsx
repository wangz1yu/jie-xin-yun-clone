import React from 'react';
import ProductCard from './ProductCard';
import './ProductSection.scss';

const products = [
  {
    img: '/assets/product1.png',
    title: '云计算服务',
    desc: '弹性计算资源，安全可靠数据存储，助力企业业务上云',
    btn: '查看详情',
    link: '/products/cloud'
  },
  {
    img: '/assets/product2.png',
    title: '物联网平台',
    desc: '全场景物联连接管理，设备快速接入，实时数据分析',
    btn: '查看详情',
    link: '/products/iot'
  },
  {
    img: '/assets/product3.png',
    title: '大数据分析',
    desc: '多维度数据采集与处理，智能洞察业务趋势',
    btn: '查看详情',
    link: '/products/bigdata'
  }
];

export default function ProductSection() {
  return (
    <section className="hfyd-products">
      <h2>数字化产品与服务</h2>
      <div className="product-list">
        {products.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>
    </section>
  );
}