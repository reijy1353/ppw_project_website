import Link from 'next/link';

export const metadata = {
  title: "BuildMyPC | Pre-built PCs",
  description: "Browse our pre-built PC configurations tuned for different workloads",
};

export default function Prebuilt() {
  return (
    <main className="container prebuilt-page">
      <section className="section-heading">
        <p className="eyebrow">Pre-built line-up</p>
        <h1>PCs tuned for different workloads</h1>
        <p>Pick a ready-made configuration, then adjust storage, RAM, or aesthetics later if needed.</p>
      </section>

      <section className="prebuilt-grid">
        <article className="prebuilt-card">
          <header>
            <p className="badge badge-success">Ready to ship</p>
            <h2>Nebula Pro</h2>
            <p className="tagline">4K esports & streaming</p>
          </header>
          <ul>
            <li>Ryzen 7 7800X3D • RTX 4080 Super</li>
            <li>32 GB DDR5 • 2 TB Gen4 NVMe</li>
            <li>Custom loop cooling • Wi-Fi 7</li>
          </ul>
          <div className="card-footer">
            <p className="price">From €2,799</p>
            <Link className="btn btn-ghost" href="#">View details</Link>
            <Link className="btn btn-primary" href="/cart">Add to cart</Link>
          </div>
        </article>

        <article className="prebuilt-card">
          <header>
            <p className="badge badge-info">Bestseller</p>
            <h2>Creator Studio</h2>
            <p className="tagline">4K editing & 3D rendering</p>
          </header>
          <ul>
            <li>Intel i9-14900K • RTX 4090</li>
            <li>64 GB DDR5 • 4 TB NVMe RAID</li>
            <li>Silent airflow chassis</li>
          </ul>
          <div className="card-footer">
            <p className="price">From €3,999</p>
            <Link className="btn btn-ghost" href="#">View details</Link>
            <Link className="btn btn-primary" href="/cart">Add to cart</Link>
          </div>
        </article>

        <article className="prebuilt-card">
          <header>
            <p className="badge badge-warning">New</p>
            <h2>Pocket Forge</h2>
            <p className="tagline">ITX performance in 12L</p>
          </header>
          <ul>
            <li>Ryzen 7 7700 • RTX 4070 Super</li>
            <li>32 GB DDR5 • 1 TB NVMe</li>
            <li>Travel-ready compact case</li>
          </ul>
          <div className="card-footer">
            <p className="price">From €1,899</p>
            <Link className="btn btn-ghost" href="#">View details</Link>
            <Link className="btn btn-primary" href="/cart">Add to cart</Link>
          </div>
        </article>
      </section>
    </main>
  );
}

