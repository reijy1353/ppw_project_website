export const metadata = {
  title: "BuildMyPC | Storage",
  description: "Browse storage options - Separate fast boot drives from large game and project libraries",
};

export default function Storage() {
  return (
    <main className="container components-page">
      <section className="section-heading">
        <p className="eyebrow">Components</p>
        <h1>Storage (SSD / HDD)</h1>
        <p>Separate fast boot drives from large game and project libraries.</p>
      </section>

      <section className="components-table">
        <table>
          <thead>
            <tr>
              <th>Drive</th>
              <th>Type</th>
              <th>Capacity</th>
              <th>Recommended use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 TB NVMe Gen4</td>
              <td>SSD</td>
              <td>1 TB</td>
              <td>Boot drive for OS and main apps.</td>
            </tr>
            <tr>
              <td>2 TB NVMe Gen4</td>
              <td>SSD</td>
              <td>2 TB</td>
              <td>Games and active project files.</td>
            </tr>
            <tr>
              <td>2 TB SATA SSD</td>
              <td>SSD</td>
              <td>2 TB</td>
              <td>Quieter storage for media libraries.</td>
            </tr>
            <tr>
              <td>4 TB HDD 7200 RPM</td>
              <td>HDD</td>
              <td>4 TB</td>
              <td>Backups and archive footage.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

