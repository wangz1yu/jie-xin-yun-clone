import React from 'react';
import SolutionCard from './SolutionCard';
import './SolutionSection.scss';

const solutions = [
  {
    img: '/assets/solution1.png',
    title: '智慧园区',
    desc: '园区智能管理与运营一体化，提升安全与效率',
    btn: '方案详情',
    link: '/solutions/park'
  },
  {
    img: '/assets/solution2.png',
    title: '工业互联网',
    desc: '设备互联、数据采集，打造智能工厂',
    btn: '方案详情',
    link: '/solutions/industry'
  },
  {
    img: '/assets/solution3.png',
    title: '数字政务',
    desc: '政务数字化转型，一站式服务创新体验',
    btn: '方案详情',
    link: '/solutions/gov'
  }
];

export default function SolutionSection() {
  return (
    <section className="hfyd-solutions">
      <h2>解决方案</h2>
      <div className="solution-list">
        {solutions.map((s, i) => <SolutionCard key={i} {...s} />)}
      </div>
    </section>
  );
}