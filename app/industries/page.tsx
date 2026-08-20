import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Industries", description: "Harmony machinery applications for garment, bags, footwear, upholstery, and automotive production." };
const items = [
  ["Garment & Apparel", "Woven, knitwear, sportswear, denim, uniforms, and fashion production."],
  ["Bags & Accessories", "Accurate cutting for layered textiles, synthetic materials, and repeatable components."],
  ["Footwear", "Flexible cutting workflows for fabric, foam, lining, and technical materials."],
  ["Upholstery", "Digital and single-layer cutting for furniture textiles and complex nesting."],
  ["Automotive", "Consistent processing for interior textiles, insulation, and composite materials."],
];
export default function IndustriesPage() {
  return <main><section className="page-hero"><div className="site-container"><p className="eyebrow light">Industries</p><h1>Start with what<br />you manufacture.</h1><p>Find the Harmony workflow that matches your materials, production volume, and quality requirements.</p></div></section>
    <section className="section site-container industry-cards">{items.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p><Link href="/contact">Discuss your application ↗</Link></article>)}</section>
  </main>;
}
