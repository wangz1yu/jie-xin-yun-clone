import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import './ProductList.scss';

const products = [
  { id: 1, title: '产品1', desc: '产品描述1', img: '/assets/product1.png' },
  { id: 2, title: '产品2', desc: '产品描述2', img: '/assets/product2.png' },
  { id: 3, title: '产品3', desc: '产品描述3', img: '/assets/product3.png' },
];

export default function ProductList() {
  return (
    <div className="hfyd-product-list">
      <NavBar />
      <section className="product-list">
        {products.map(p => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>
      <Footer />
    </div>
  );
}