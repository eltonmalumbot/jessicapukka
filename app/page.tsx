import Image from "next/image";
import Link from "next/link";
import { MachineCard } from "@/components/machine-card";
import { featuredMachines } from "@/data/machines";

const categories = [
  { code: "01", title: "Spreading", text: "Consistent, tension-controlled fabric laying for cleaner downstream cutting." },
  { code: "02", title: "Automatic Cutting", text: "High-throughput multi-ply cutting engineered for precision and repeatability." },
  { code: "03", title: "Single-Layer Cutting", text: "Agile digital cutting for samples, technical textiles, and short production runs." },
  { code: "04", title: "Supporting Equipment", text: "Tables, preparation systems, and tools that complete the cutting-room workflow." },
];

const industries = ["Garment & Apparel", "Bags & Accessories", "Footwear", "Upholstery", "Automotive"];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <Image src="https://images.unsplash.com/photo-1673937366980-f254916bce23?auto=format&fit=crop&w=2000&q=88" alt="Modern textile production floor with industrial machinery" fill priority unoptimized sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="site-container hero-content">
          <p className="eyebrow light">Industrial cutting-room machinery</p>
          <h1>Precision in<br />Every Cut.</h1>
          <p className="hero-copy">Integrated spreading and cutting technology designed to make production faster, more consistent, and easier to control.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/machines">Explore machines <span>↗</span></Link>
            <Link className="button ghost" href="/about">Discover Harmony</Link>
          </div>
        </div>
        <div className="hero-rail">
          <div><strong>33+</strong><span>Years of combined<br />industry experience</span></div>
          <div><strong>200+</strong><span>Machines installed<br />across markets</span></div>
          <div><strong>5+</strong><span>Countries with<br />Harmony systems</span></div>
        </div>
      </section>

      <section className="section site-container intro-grid">
        <div><p className="eyebrow">Engineered for production</p><h2>A stronger cutting room starts with the right machine.</h2></div>
        <div className="intro-copy">
          <p>Harmony e-Solution brings decades of practical cutting-room experience into a focused portfolio of industrial machinery. From fabric preparation to the final cut, every system is selected to support stable output and dependable day-to-day operation.</p>
          <Link className="text-link" href="/about">About Harmony <span>→</span></Link>
        </div>
      </section>

      <section className="category-section"><div className="site-container">
        <div className="section-heading row-heading"><div><p className="eyebrow">Machine portfolio</p><h2>Built around your workflow.</h2></div><Link className="text-link" href="/machines">View all machines <span>→</span></Link></div>
        <div className="category-grid">{categories.map((category) => (
          <article className="category-card" key={category.title}><span className="category-code">{category.code}</span><h3>{category.title}</h3><p>{category.text}</p><Link aria-label={`Explore ${category.title}`} href="/machines">↗</Link></article>
        ))}</div>
      </div></section>

      <section className="section site-container">
        <div className="section-heading row-heading"><div><p className="eyebrow">Selected machines</p><h2>Technology that moves production forward.</h2></div><p className="section-note">Explore representative systems from our spreading and cutting range.</p></div>
        <div className="machine-grid">{featuredMachines.map((machine) => <MachineCard machine={machine} key={machine.slug} />)}</div>
      </section>

      <section className="industry-band"><div className="site-container industry-layout">
        <div><p className="eyebrow light">Industries</p><h2>One workflow.<br />Many applications.</h2><p>Discover machinery matched to the materials, volumes, and precision your production demands.</p><Link className="button ghost" href="/industries">Explore industries</Link></div>
        <ol className="industry-list">{industries.map((industry, index) => <li key={industry}><span>0{index + 1}</span><strong>{industry}</strong><span>↗</span></li>)}</ol>
      </div></section>

      <section className="section site-container trust-grid">
        <div className="trust-visual"><Image src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?auto=format&fit=crop&w=1200&q=85" alt="Rows of modern textile machinery in a production facility" fill unoptimized sizes="(max-width: 900px) 100vw, 50vw" /><span className="image-label">Industrial experience since the 1990s</span></div>
        <div className="trust-copy"><p className="eyebrow">Why Harmony</p><h2>Practical expertise behind every installation.</h2><div className="trust-points">
          <div><span>01</span><div><h3>Complete machine range</h3><p>Connected equipment for spreading, cutting, and supporting workflows.</p></div></div>
          <div><span>02</span><div><h3>Technical understanding</h3><p>Solutions shaped by real production requirements—not specifications alone.</p></div></div>
          <div><span>03</span><div><h3>Local support in Indonesia</h3><p>Installation, training, and after-sales support delivered with Pukka Indonusa.</p></div></div>
        </div></div>
      </section>

      <section className="global-section"><div className="site-container global-grid"><div><p className="eyebrow">Global presence</p><h2>Harmony around<br />the world.</h2></div><div className="world-mark" aria-hidden="true">H</div><div className="country-list"><span>Hong Kong</span><span>China</span><span>Indonesia</span><span>Bangladesh</span><span>Vietnam</span><span>Malaysia</span><span>Ethiopia</span></div></div></section>

      <section className="indonesia-cta"><div className="site-container indonesia-grid"><p className="eyebrow light">Harmony in Indonesia</p><h2>Machines are only the beginning. Local support completes the solution.</h2><div><p>Harmony machines are represented, installed, and supported in Indonesia by Pukka Indonusa.</p><Link className="button white" href="/contact">Contact Pukka Indonusa <span>↗</span></Link></div></div></section>
    </main>
  );
}
