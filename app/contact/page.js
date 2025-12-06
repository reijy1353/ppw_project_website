'use client';

export default function Contact() {
  return (
    <main className="container contact-page">
      <section className="section-heading">
        <p className="eyebrow">Contact</p>
        <h1>Let&rsquo;s talk about your next PC</h1>
        <p>Send us a message about your build idea, a pre-built configuration, or general questions.</p>
      </section>

      <section className="contact-layout">
        <form className="contact-form" action="#" method="post">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Subject
            <input type="text" name="subject" placeholder="New gaming PC, upgrade, support..." />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell us what you want to build or fix."></textarea>
          </label>
          <button type="submit" className="btn btn-primary">Send message</button>
        </form>

        <aside className="contact-details">
          <h2>Other ways to reach us</h2>
          <p>Email: <a href="mailto:hello@buildmypc.com">hello@buildmypc.com</a></p>
          <p>Default reply time: under 24 hours on business days.</p>
        </aside>
      </section>
    </main>
  );
}

