export const metadata = {
  title: "BuildMyPC | Power supplies",
  description: "Browse PSUs - Choose a reliable PSU with enough wattage and efficiency for your GPU and future upgrades",
};

export default function PSU() {
  return (
    <main className="container components-page">
      <section className="section-heading">
        <p className="eyebrow">Components</p>
        <h1>Power supplies (PSU)</h1>
        <p>Choose a reliable PSU with enough wattage and efficiency for your GPU and future upgrades.</p>
      </section>

      <section className="components-table">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Wattage</th>
              <th>Efficiency</th>
              <th>Recommended build</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>650W Gold</td>
              <td>650 W</td>
              <td>80+ Gold</td>
              <td>Mid-range CPU and GPUs like RTX 4060 Ti.</td>
            </tr>
            <tr>
              <td>750W Gold</td>
              <td>750 W</td>
              <td>80+ Gold</td>
              <td>Perfect for RTX 4070 / 4070 Super builds.</td>
            </tr>
            <tr>
              <td>850W Gold</td>
              <td>850 W</td>
              <td>80+ Gold</td>
              <td>Recommended for RTX 4080 and heavy overclocks.</td>
            </tr>
            <tr>
              <td>1000W Platinum</td>
              <td>1000 W</td>
              <td>80+ Platinum</td>
              <td>High-end workstations and RTX 4090 systems.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

