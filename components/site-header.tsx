import Link from "next/link";
const navigation = [["Machines", "/machines"], ["Industries", "/industries"], ["About", "/about"], ["Contact", "/contact"]];
export function SiteHeader() {
  return <header className="site-header"><div className="header-inner">
    <Link className="brand" href="/" aria-label="Harmony e-Solution home"><span className="brand-mark">H</span><span><strong>HARMONY</strong><small>e-SOLUTION</small></span></Link>
    <nav aria-label="Primary navigation">{navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
    <Link className="header-cta" href="/contact">Talk to us <span>↗</span></Link>
  </div></header>;
}
