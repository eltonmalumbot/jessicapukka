import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredMachines, getMachine } from "@/data/machines";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return featuredMachines.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const machine = getMachine((await params).slug);
  if (!machine) return { title: "Machine not found" };
  return { title: `${machine.model} ${machine.name}`, description: machine.description, openGraph: { title: `${machine.model} ${machine.name}`, description: machine.description, images: [{ url: machine.image }] }, twitter: { card: "summary_large_image", title: `${machine.model} ${machine.name}`, description: machine.description, images: [machine.image] } };
}
export default async function MachineDetailPage({ params }: Props) {
  const machine = getMachine((await params).slug); if (!machine) notFound();
  return <main><section className="product-hero"><div className="site-container product-hero-grid"><div><p className="eyebrow light">{machine.category}</p><p className="product-model">Harmony {machine.model}</p><h1>{machine.name}</h1><p>{machine.description}</p><Link className="button primary" href="/contact">Request information <span>↗</span></Link></div><div className="product-image"><Image src={machine.image} alt={machine.name} fill priority unoptimized sizes="(max-width: 900px) 100vw, 55vw" /></div></div></section>
    <section className="section site-container product-content"><div><p className="eyebrow">Overview</p><h2>Production-focused performance.</h2><p>This representative machine profile follows Harmony&apos;s product-page framework. Final verified specifications, photography, and machine options can be inserted once the official product catalogue is supplied.</p></div><div className="feature-list">{machine.features.map((feature, index) => <div key={feature}><span>0{index + 1}</span><strong>{feature}</strong></div>)}</div></section>
    <section className="spec-section"><div className="site-container"><p className="eyebrow">At a glance</p><h2>Technical profile</h2><div className="spec-grid">{machine.specs.map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}<div><span>Model</span><strong>{machine.model}</strong></div><div><span>Category</span><strong>{machine.category}</strong></div></div></div></section>
  </main>;
}
