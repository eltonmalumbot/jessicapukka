import type { Metadata } from "next";
import { MachineCard } from "@/components/machine-card";
import { featuredMachines } from "@/data/machines";
export const metadata: Metadata = { title: "Machines", description: "Explore Harmony spreading, automatic cutting, single-layer cutting, and supporting equipment." };
export default function MachinesPage() {
  return <main><section className="page-hero"><div className="site-container"><p className="eyebrow light">Machine portfolio</p><h1>Technology for the<br />modern cutting room.</h1><p>Explore machinery for fabric preparation, spreading, precision cutting, and the supporting workflow around it.</p></div></section>
    <section className="section site-container"><div className="filter-row"><span>All machines</span><span>Spreading</span><span>Automatic cutting</span><span>Single-layer cutting</span></div><div className="machine-grid">{featuredMachines.map((machine) => <MachineCard machine={machine} key={machine.slug} />)}</div></section>
  </main>;
}
