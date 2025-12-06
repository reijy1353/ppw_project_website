export const metadata = {
  title: "BuildMyPC | Processors",
  description: "Browse CPUs - Choose a processor that matches your games, apps, and resolution targets",
};

export default function CPU() {
  return (
    <main className="container components-page">
      <section className="section-heading">
        <p className="eyebrow">Components</p>
        <h1>Processors (CPU)</h1>
        <p>Choose a processor that matches your games, apps, and resolution targets.</p>
      </section>

      <section className="components-table">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Cores / Threads</th>
              <th>Use case</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ryzen 5 7600</td>
              <td>6 / 12</td>
              <td>1080p gaming, everyday use</td>
              <td>Great value starter chip for budget builds.</td>
            </tr>
            <tr>
              <td>Ryzen 7 7800X3D</td>
              <td>8 / 16</td>
              <td>High FPS gaming</td>
              <td>Excellent 1440p and 4K gaming performance.</td>
            </tr>
            <tr>
              <td>Intel Core i5-14600K</td>
              <td>14 cores</td>
              <td>Mixed gaming & productivity</td>
              <td>Balanced choice for streaming and multitasking.</td>
            </tr>
            <tr>
              <td>Intel Core i9-14900K</td>
              <td>24 cores</td>
              <td>Rendering and heavy workloads</td>
              <td>Best used with strong cooling and a quality PSU.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

