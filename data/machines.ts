export type Machine = {
  slug: string; model: string; name: string; category: string; description: string;
  image: string; specs: { label: string; value: string }[]; features: string[];
};

export const featuredMachines: Machine[] = [
  {
    slug: "hrc-p-automatic-cutter", model: "HRC-P", name: "Automatic Fabric Cutting Machine", category: "Automatic Cutting",
    description: "A high-throughput cutting platform designed for stable multi-ply production and precise pattern execution.",
    image: "https://image.made-in-china.com/2f0j00rpFkYIJqAMue/Bangzheng-Cloth-Cutting-Machine-Automatic-Textile-Cloth-Fabric-Cutting-Machine-Garment-Cutter-Plotter-Apparel-Machinery.webp",
    specs: [{ label: "Application", value: "Multi-ply fabric" }, { label: "Workflow", value: "Continuous production" }],
    features: ["Precision cutting control", "Vacuum-assisted material hold", "Production-ready operating interface", "Modular cutting-room integration"],
  },
  {
    slug: "hsp-series-spreader", model: "HSP Series", name: "Automatic Fabric Spreader", category: "Spreading",
    description: "Controlled fabric laying that supports consistent tension, alignment, and layer quality before cutting.",
    image: "https://s.alicdn.com/@sc04/kf/Hdd2a9c82208c4dc28ad769af54a1a28cC/Automatic-Cloth-Spreading-Machine-China-Supplier-Cloth-Fabric-Spreading-Machine-for-Factory.jpg",
    specs: [{ label: "Application", value: "Roll fabric" }, { label: "Workflow", value: "Automated spreading" }],
    features: ["Tension-aware spreading", "Edge alignment support", "Flexible roll handling", "Consistent layer preparation"],
  },
  {
    slug: "hsc-digital-cutter", model: "HSC Digital", name: "Single-Layer Cutting System", category: "Single-Layer Cutting",
    description: "A flexible digital cutter for samples, short runs, and materials that demand agile changeovers.",
    image: "https://image.made-in-china.com/365f3j00cHWVKqLyZbGp/CNC-Textile-Fabric-Cutter-Automatic-Clothes-Material-Cutting-Machine-for-Automotive-Interior.webp",
    specs: [{ label: "Application", value: "Single-ply material" }, { label: "Workflow", value: "Digital pattern cutting" }],
    features: ["Fast pattern changeover", "Material versatility", "Digital workflow compatibility", "Sample-to-production flexibility"],
  },
];

export const getMachine = (slug: string) => featuredMachines.find((machine) => machine.slug === slug);
