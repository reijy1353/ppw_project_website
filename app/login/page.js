'use client';

import Link from 'next/link';

export default function Login() {
  return (
    <main className="container auth-page">
      <section className="section-heading">
        <p className="eyebrow">Account</p>
        <h1>Login to BuildMyPC</h1>
        <p>Access your saved configurations and cart. In this project version, the form is static only.</p>
      </section>

      <section className="auth-layout">
        <form className="auth-form" action="#" method="post">
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Password
            <input type="password" name="password" required />
          </label>
          <button type="submit" className="btn btn-primary">Login</button>
          <p>Don&rsquo;t have an account? <Link href="/signup">Create one</Link>.</p>
        </form>
      </section>
    </main>
  );
}

