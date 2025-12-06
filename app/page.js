import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-media">
          <video 
            src="/images/homepage/homepage_main_section.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
          ></video>
          <div className="hero-overlay gradient-overlay"></div>
        </div>
        <div className="hero-content">
          <p className="eyebrow">Powerful rigs. Zero guesswork.</p>
          <h1>Build the PC you wish you owned.</h1>
          <p className="subtitle">
            Curated components, battle-tested pre-builds, and expert guidance
            so every frame, render, and idea runs flawlessly.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/configurator">Start building</Link>
            <Link className="btn btn-secondary" href="/prebuilt">Browse pre-builds</Link>
          </div>
        </div>
      </section>

      <section className="container prebuilt-section" id="prebuilt">
        <div className="section-heading">
          <p className="eyebrow">Featured line-up</p>
          <h2>Pre-built PCs tuned for every use case</h2>
          <p>Select a build to inspect specs, benchmarks, and upgrade paths.</p>
        </div>
        <div className="prebuilt-grid">
          <article className="prebuilt-card">
            <header>
              <p className="badge badge-success">Ready to ship</p>
              <h3>Nebula Pro</h3>
              <p className="tagline">4K esports & streaming</p>
            </header>
            <ul>
              <li>Ryzen 7 7800X3D • RTX 4080 Super</li>
              <li>32 GB DDR5 • 2 TB Gen4 NVMe</li>
              <li>Custom loop cooling • Wi-Fi 7</li>
            </ul>
            <div className="card-footer">
              <p className="price">From $2,799</p>
              <Link className="btn btn-ghost" href="#">View build</Link>
            </div>
          </article>
          <article className="prebuilt-card">
            <header>
              <p className="badge badge-info">Bestseller</p>
              <h3>Creator Studio</h3>
              <p className="tagline">4K editing & 3D rendering</p>
            </header>
            <ul>
              <li>Intel i9-14900K • RTX 4090</li>
              <li>64 GB DDR5 • 4 TB NVMe RAID</li>
              <li>Silent airflow chassis</li>
            </ul>
            <div className="card-footer">
              <p className="price">From $3,999</p>
              <Link className="btn btn-ghost" href="#">View build</Link>
            </div>
          </article>
          <article className="prebuilt-card">
            <header>
              <p className="badge badge-warning">New</p>
              <h3>Pocket Forge</h3>
              <p className="tagline">ITX performance in 12L</p>
            </header>
            <ul>
              <li>Ryzen 7 7700 • RTX 4070 Super</li>
              <li>32 GB DDR5 • 1 TB NVMe</li>
              <li>Travel-ready crush case</li>
            </ul>
            <div className="card-footer">
              <p className="price">From $1,899</p>
              <Link className="btn btn-ghost" href="#">View build</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="container components-section" id="components">
        <div className="section-heading">
          <p className="eyebrow">Curated component shop</p>
          <h2>Only the parts we trust in our own rigs</h2>
        </div>
        <div className="component-grid">
          <article>
            <h3>Processors & Cooling</h3>
            <p>Unlocked CPUs, AIOs, and custom loop hardware with thermal reports.</p>
            <Link href="/components/cpu" className="text-link">Explore CPUs</Link>
          </article>
          <article>
            <h3>Graphics</h3>
            <p>Latest NVIDIA and AMD cards with tested FPS metrics.</p>
            <Link href="/components/gpu" className="text-link">Find a GPU</Link>
          </article>
          <article>
            <h3>Storage</h3>
            <p>Blazing NVMe drives, RAID-ready SSDs, and curated NAS options.</p>
            <Link href="/components/storage" className="text-link">Upgrade storage</Link>
          </article>
          <article>
            <h3>Peripherals</h3>
            <p>Monitors, keyboards, and audio tuned for creation and play.</p>
            <Link href="/components" className="text-link">View accessories</Link>
          </article>
        </div>
      </section>

      <section className="container builder-steps" id="builder">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>From idea to powered-on in four steps</h2>
        </div>
        <ol className="steps">
          <li>
            <h3>Tell us your goals</h3>
            <p>Gaming, creative work, AI workflows—set your targets and budget.</p>
          </li>
          <li>
            <h3>Pick curated parts</h3>
            <p>We suggest compatible components or pre-tuned templates.</p>
          </li>
          <li>
            <h3>We build & stress test</h3>
            <p>Every rig runs 24h thermal, memory, and graphics diagnostics.</p>
          </li>
          <li>
            <h3>Enjoy white-glove handoff</h3>
            <p>Get cable maps, BIOS profiles, and lifetime support.</p>
          </li>
        </ol>
      </section>

      <section className="container reviews-section" id="reviews">
        <div className="section-heading">
          <p className="eyebrow">Voices from the community</p>
          <h2>Real builders. Real wins.</h2>
        </div>
        <div className="reviews-grid">
          <article>
            <p className="quote">
              &ldquo;My Nebula Pro hits 360 FPS in Valorant while streaming. Temps stay under 60°C.&rdquo;
            </p>
            <p className="reviewer">Alex • Esports coach</p>
          </article>
          <article>
            <p className="quote">
              &ldquo;Their team dialed in a render workstation that chews through octane scenes.&rdquo;
            </p>
            <p className="reviewer">Marina • 3D artist</p>
          </article>
          <article>
            <p className="quote">
              &ldquo;The build guide and cable labels made future upgrades painless.&rdquo;
            </p>
            <p className="reviewer">Devon • Indie dev</p>
          </article>
        </div>
      </section>

      <section className="container cta-section" id="signup">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Need a co-builder?</p>
            <h2>Let&rsquo;s architect your next PC together.</h2>
            <p>Book a free 15-minute consult with our build engineers.</p>
          </div>
          <a className="btn btn-primary" href="mailto:hello@buildmypc.com">Book a call</a>
        </div>
      </section>
    </>
  );
}
