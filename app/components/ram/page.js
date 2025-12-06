export const metadata = {
  title: "BuildMyPC | RAM",
  description: "Browse RAM options - Pick the right capacity and speed for smooth gaming, editing, and multitasking",
};

export default function RAM() {
  return (
    <main className="container components-page">
      <section className="section-heading">
        <p className="eyebrow">Components</p>
        <h1>Memory (RAM)</h1>
        <p>Pick the right capacity and speed for smooth gaming, editing, and multitasking.</p>
      </section>

      <section className="components-table">
        <table>
          <thead>
            <tr>
              <th>Kit</th>
              <th>Capacity</th>
              <th>Speed</th>
              <th>Recommended for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DDR5 16 GB</td>
              <td>2 × 8 GB</td>
              <td>5600 MHz</td>
              <td>Entry-level gaming and everyday tasks.</td>
            </tr>
            <tr>
              <td>DDR5 32 GB</td>
              <td>2 × 16 GB</td>
              <td>6000 MHz</td>
              <td>Streaming, heavier games, and light editing.</td>
            </tr>
            <tr>
              <td>DDR5 64 GB</td>
              <td>2 × 32 GB</td>
              <td>6000 MHz</td>
              <td>3D work, video editing, and multiple VMs.</td>
            </tr>
            <tr>
              <td>DDR4 32 GB</td>
              <td>2 × 16 GB</td>
              <td>3600 MHz</td>
              <td>Solid upgrade for older but capable systems.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

