import Link from 'next/link';

export const metadata = {
  title: "BuildMyPC | Components",
  description: "Browse all PC components - CPUs, GPUs, motherboards, RAM, storage, PSUs, and cases",
};

export default function Components() {
  return (
    <main className="container components-page">
      <section className="section-heading">
        <p className="eyebrow">Component catalog</p>
        <h1>All the parts you need for your build</h1>
        <p>Browse by category to find tested CPUs, GPUs, motherboards, memory, storage, power supplies, and cases.</p>
      </section>

      <section className="component-grid">
        <article>
          <h2>Processors (CPU)</h2>
          <p>From budget quad-cores to high-end gaming and creator chips, all validated in real builds.</p>
          <Link href="/components/cpu" className="text-link">View processors</Link>
        </article>
        <article>
          <h2>Motherboards</h2>
          <p>ATX, mATX, and ITX boards with clear support for current CPUs and RAM speeds.</p>
          <Link href="/components/motherboards" className="text-link">View motherboards</Link>
        </article>
        <article>
          <h2>Graphics cards (GPU)</h2>
          <p>Esports, 4K, and creator GPUs with FPS numbers and recommended pairings.</p>
          <Link href="/components/gpu" className="text-link">View graphics cards</Link>
        </article>
        <article>
          <h2>Memory (RAM)</h2>
          <p>Fast DDR4 and DDR5 kits with tested timings and stability profiles.</p>
          <Link href="/components/ram" className="text-link">View RAM</Link>
        </article>
        <article>
          <h2>Storage (SSD / HDD)</h2>
          <p>Boot drives, game libraries, and archive storage with real-world transfer tests.</p>
          <Link href="/components/storage" className="text-link">View storage</Link>
        </article>
        <article>
          <h2>Power supplies (PSU)</h2>
          <p>Reliable Bronze, Gold, and Platinum units sized for your GPU and upgrade plans.</p>
          <Link href="/components/psu" className="text-link">View PSUs</Link>
        </article>
        <article>
          <h2>Cases</h2>
          <p>Airflow and silence-focused cases in multiple sizes, with clear GPU and cooler clearance.</p>
          <Link href="/components/case" className="text-link">View cases</Link>
        </article>
      </section>
    </main>
  );
}

