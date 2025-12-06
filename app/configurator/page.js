'use client';

export default function Configurator() {
  return (
    <main className="container configurator-page">
      <section className="section-heading">
        <p className="eyebrow">PC Configurator</p>
        <h1>Design your perfect build</h1>
        <p>Choose your use case, budget, and parts. Later we can add smart compatibility checks and live pricing.</p>
      </section>

      <section className="configurator-layout">
        <form className="configurator-form" action="#" method="get">
          <fieldset>
            <legend>1. Build profile</legend>
            <label>
              Primary use case
              <select name="use-case">
                <option value="gaming">Gaming</option>
                <option value="creator">Content creation</option>
                <option value="office">Office / everyday</option>
                <option value="ai">AI / machine learning</option>
              </select>
            </label>
            <label>
              Target resolution
              <select name="resolution">
                <option value="1080p">1080p</option>
                <option value="1440p">1440p</option>
                <option value="4k">4K</option>
              </select>
            </label>
            <label>
              Budget (EUR)
              <input type="number" name="budget" placeholder="1500" />
            </label>
          </fieldset>

          <fieldset>
            <legend>2. Core components</legend>
            <label>
              CPU
              <select name="cpu">
                <option>Ryzen 5 7600</option>
                <option>Ryzen 7 7800X3D</option>
                <option>Intel Core i5-14600K</option>
                <option>Intel Core i7-14700K</option>
              </select>
            </label>
            <label>
              GPU
              <select name="gpu">
                <option>RTX 4060 Ti</option>
                <option>RTX 4070 Super</option>
                <option>RTX 4080 Super</option>
                <option>RTX 4090</option>
              </select>
            </label>
            <label>
              Motherboard
              <select name="motherboard">
                <option>B650 ATX</option>
                <option>X670E ATX</option>
                <option>Z790 ATX</option>
                <option>B760 mATX</option>
              </select>
            </label>
            <label>
              RAM
              <select name="ram">
                <option>16 GB DDR5</option>
                <option>32 GB DDR5</option>
                <option>64 GB DDR5</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>3. Storage & power</legend>
            <label>
              Storage
              <select name="storage">
                <option>1 TB NVMe SSD</option>
                <option>2 TB NVMe SSD</option>
                <option>1 TB NVMe + 2 TB HDD</option>
              </select>
            </label>
            <label>
              Power supply
              <select name="psu">
                <option>650W Gold</option>
                <option>750W Gold</option>
                <option>850W Gold</option>
              </select>
            </label>
            <label>
              Case
              <select name="case">
                <option>Mid-tower airflow</option>
                <option>Silent mid-tower</option>
                <option>ITX small form factor</option>
              </select>
            </label>
          </fieldset>

          <button type="submit" className="btn btn-primary">Preview build</button>
        </form>

        <aside className="configurator-summary">
          <h2>Build summary</h2>
          <p>This panel can later show estimated FPS, wattage, and upgrade suggestions.</p>
          <ul>
            <li>Selected profile and resolution</li>
            <li>Parts list with short notes</li>
            <li>Estimated total price</li>
          </ul>
          <p>For now this is static placeholder content, ready for JavaScript logic later.</p>
        </aside>
      </section>
    </main>
  );
}

