export const metadata = {
  title: "BuildMyPC | Cases",
  description: "Browse PC cases - Pick a case with enough airflow, clearance, and style for your parts",
};

export default function Case() {
  return (
    <main className="container components-page">
      <section className="section-heading">
        <p className="eyebrow">Components</p>
        <h1>Cases</h1>
        <p>Pick a case with enough airflow, clearance, and style for your parts.</p>
      </section>

      <section className="components-table">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Size</th>
              <th>Focus</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Airflow Mid-tower</td>
              <td>ATX</td>
              <td>Cooling</td>
              <td>Mesh front panel, ideal for gaming rigs.</td>
            </tr>
            <tr>
              <td>Silent Mid-tower</td>
              <td>ATX</td>
              <td>Silence</td>
              <td>Sound-dampened panels and closed front.</td>
            </tr>
            <tr>
              <td>Compact ITX</td>
              <td>Mini-ITX</td>
              <td>Small form factor</td>
              <td>Great for LAN and living room PCs, requires careful part choices.</td>
            </tr>
            <tr>
              <td>Creator Tower</td>
              <td>E-ATX</td>
              <td>Workspace</td>
              <td>Room for multiple drives and large GPUs.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

