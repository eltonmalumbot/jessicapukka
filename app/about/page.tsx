import type { Metadata } from "next";
export const metadata: Metadata = { title: "About Harmony", description: "Learn about Harmony e-Solution and the experience behind its industrial machinery portfolio." };
export default function AboutPage() {
  return <main><section className="page-hero"><div className="site-container"><p className="eyebrow light">About Harmony</p><h1>Experience transformed<br />into better machinery.</h1><p>Established in Hong Kong in 2019, Harmony e-Solution builds on decades of accumulated garment and cutting-room expertise.</p></div></section>
    <section className="section site-container editorial-grid"><div><p className="eyebrow">Who we are</p><h2>Industrial knowledge with a focused purpose.</h2></div><div><p>Harmony was created to deliver dependable spreading, cutting, and supporting equipment for modern manufacturers. Our understanding reaches beyond the machine itself to fabric behavior, production flow, installation, and everyday operation.</p><p>That practical perspective helps us match technology with the requirements that actually matter on the factory floor.</p></div></section>
    <section className="timeline-section"><div className="site-container timeline"><div><strong>1990s</strong><span>Industry experience begins</span></div><div><strong>30+ years</strong><span>Cutting-room expertise grows</span></div><div><strong>2019</strong><span>Harmony e-Solution established</span></div><div><strong>Today</strong><span>Systems operating internationally</span></div></div></section>
  </main>;
}
