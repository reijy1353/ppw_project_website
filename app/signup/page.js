'use client';

import Link from 'next/link';

export default function Signup() {
  return (
    <main className="container auth-page">
      <section className="section-heading">
        <p className="eyebrow">Account</p>
        <h1>Create your BuildMyPC account</h1>
        <p>Save builds, compare configurations, and come back to them later.</p>
      </section>

      <section className="auth-layout">
        <form className="auth-form" action="#" method="post">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Password
            <input type="password" name="password" required />
          </label>
          <label>
            Confirm password
            <input type="password" name="password_confirm" required />
          </label>
          <button type="submit" className="btn btn-primary">Sign up</button>
          <p>Already have an account? <Link href="/login">Log in</Link>.</p>
        </form>
      </section>
    </main>
  );
}

