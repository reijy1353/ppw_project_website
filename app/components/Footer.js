export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <p className="eyebrow">BuildMyPC</p>
          <p>Custom PCs crafted for Gods, kidding just for humans, but humans with a kind heart.</p>
        </div>
        <div className="footer-links">
          <a href="#">Support</a>
          <a href="#">Warranty</a>
          <a href="#">Privacy</a>
        </div>
        <p className="small-print">© {currentYear} BuildMyPC. All rights reserved.</p>
      </div>
    </footer>
  );
}

