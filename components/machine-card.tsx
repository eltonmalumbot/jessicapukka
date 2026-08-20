import Image from "next/image";
import Link from "next/link";
import type { Machine } from "@/data/machines";

export function MachineCard({ machine }: { machine: Machine }) {
  return <article className="machine-card">
    <Link className="machine-image" href={`/machines/${machine.slug}`}>
      <Image src={machine.image} alt={machine.name} fill unoptimized sizes="(max-width: 800px) 100vw, 33vw" /><span>{machine.category}</span>
    </Link>
    <div className="machine-body"><p>{machine.model}</p><h3><Link href={`/machines/${machine.slug}`}>{machine.name}</Link></h3><Link className="card-arrow" aria-label={`View ${machine.name}`} href={`/machines/${machine.slug}`}>↗</Link></div>
  </article>;
}
