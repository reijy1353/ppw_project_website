export const metadata = {
  title: "BuildMyPC | Motherboards",
  description: "Browse motherboards - Select a motherboard with the right socket, chipset, and features for your build",
};

export default function Motherboards() {
  return (
    <main className="container components-page">
      <section className="section-heading">
        <p className="eyebrow">Components</p>
        <h1>Motherboards</h1>
        <p>Select a motherboard with the right socket, chipset, and features for your build.</p>
      </section>

      <section className="components-table">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Platform</th>
              <th>Form factor</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B650 ATX</td>
              <td>AM5</td>
              <td>ATX</td>
              <td>Great starting point for Ryzen 7000 gaming builds.</td>
            </tr>
            <tr>
              <td>X670E ATX</td>
              <td>AM5</td>
              <td>ATX</td>
              <td>More PCIe lanes and better VRMs for high-end CPUs.</td>
            </tr>
            <tr>
              <td>Z790 ATX</td>
              <td>LGA1700</td>
              <td>ATX</td>
              <td>Ideal for unlocked Intel CPUs and fast DDR5 kits.</td>
            </tr>
            <tr>
              <td>B760 mATX</td>
              <td>LGA1700</td>
              <td>mATX</td>
              <td>Compact option for mid-range Intel gaming PCs.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

