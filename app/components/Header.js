'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="container-navbar">
        <Link className="logo-link" href="/">
          <Image 
            src="/images/logo/bmpc_logo_no_text.png" 
            alt="BuildMyPC logo"
            width={48}
            height={48}
          />
          <span>BuildMyPC</span>
        </Link>
        <button 
          className="nav-toggle" 
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span>{isMenuOpen ? '✕' : '☰'}</span>
        </button>
        <div 
          className={`navbar-links ${isMenuOpen ? 'open' : ''}`} 
          id="primary-navigation"
        >
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/components" onClick={() => setIsMenuOpen(false)}>Components</Link>
          <Link href="/prebuilt" onClick={() => setIsMenuOpen(false)}>Pre-built PCs</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link href="/cart" onClick={() => setIsMenuOpen(false)}>Cart</Link>
          <Link className="btn btn-primary btn-navbar" href="/signup" onClick={() => setIsMenuOpen(false)}>Sign up</Link>
        </div>
      </nav>
    </header>
  );
}

