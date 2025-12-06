export const metadata = {
  title: "BuildMyPC | Graphics cards",
  description: "Browse GPUs - Pick a GPU that matches your games, resolution, and refresh rate",
};

export default function GPU() {
  return (
    <main className="container components-page">
      <section className="section-heading">
        <p className="eyebrow">Components</p>
        <h1>Graphics cards (GPU)</h1>
        <p>Pick a GPU that matches your games, resolution, and refresh rate.</p>
      </section>

      <section className="components-table">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Best for</th>
              <th>Resolution</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RTX 4060 Ti</td>
              <td>Competitive 1080p</td>
              <td>1080p</td>
              <td>Great entry point for high FPS esports titles.</td>
            </tr>
            <tr>
              <td>RTX 4070 Super</td>
              <td>Balanced gaming</td>
              <td>1440p</td>
              <td>Strong choice for mixed single-player and esports.</td>
            </tr>
            <tr>
              <td>RTX 4080 Super</td>
              <td>High-end 4K</td>
              <td>1440p / 4K</td>
              <td>Excellent ray tracing and high refresh performance.</td>
            </tr>
            <tr>
              <td>RTX 4090</td>
              <td>Extreme performance</td>
              <td>4K</td>
              <td>Best for heavy creators and maxed-out 4K gaming.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

