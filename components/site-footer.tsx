import Link from "next/link";
export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container footer-grid">
    <div><div className="footer-brand"><span>H</span><strong>HARMONY <small>e-SOLUTION</small></strong></div><p>Industrial spreading and cutting machinery built around real production.</p></div>
    <div><h3>Explore</h3><Link href="/machines">Machines</Link><Link href="/industries">Industries</Link><Link href="/about">About Harmony</Link></div>
    <div><h3>Indonesia</h3><p>Represented and supported by Pukka Indonusa.</p><Link href="/contact">Contact local support →</Link></div>
  </div><div className="site-container footer-bottom"><span>© 2026 Harmony e-Solution. All rights reserved.</span><span>Hong Kong · Global</span></div></footer>;
}
