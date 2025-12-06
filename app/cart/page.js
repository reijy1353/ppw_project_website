'use client';

export default function Cart() {
  return (
    <main className="container cart-page">
      <section className="section-heading">
        <p className="eyebrow">Cart</p>
        <h1>Your current selection</h1>
        <p>In a real shop this page would show live prices and quantities. For now it is a static layout.</p>
      </section>

      <section className="cart-layout">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Type</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nebula Pro pre-built</td>
              <td>Pre-built PC</td>
              <td>€2,799</td>
              <td>1</td>
              <td>€2,799</td>
            </tr>
            <tr>
              <td>Extra 2 TB NVMe SSD</td>
              <td>Storage</td>
              <td>€199</td>
              <td>1</td>
              <td>€199</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Estimated total</td>
              <td>€2,998</td>
            </tr>
          </tfoot>
        </table>

        <aside className="cart-summary">
          <h2>Checkout summary</h2>
          <p>This section could later show taxes, shipping, and payment options.</p>
          <button className="btn btn-primary" type="button">Proceed to checkout</button>
        </aside>
      </section>
    </main>
  );
}

