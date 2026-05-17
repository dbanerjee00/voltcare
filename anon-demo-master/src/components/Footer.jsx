import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-category">
        <div className="container">
          <h2 className="footer-category-title">Brand directory</h2>
          <div className="footer-category-box">
            <h3 className="category-box-title">Kits :</h3>
            <Link to="/category/arduino-kits" className="footer-category-link">Arduino Kits</Link>
            <Link to="/category/raspberry-kits" className="footer-category-link">Raspberry Pi Kits</Link>
            <Link to="/category/robot-kits" className="footer-category-link">Robot Kits</Link>
            <Link to="/category/soldering-kits" className="footer-category-link">Soldering Kits</Link>
          </div>
          <div className="footer-category-box">
            <h3 className="category-box-title">Tools :</h3>
            <Link to="/category/multimeter" className="footer-category-link">Multimeters</Link>
            <Link to="/category/soldering" className="footer-category-link">Soldering Irons</Link>
            <Link to="/category/oscilloscope" className="footer-category-link">Oscilloscopes</Link>
            <Link to="/category/stripper" className="footer-category-link">Wire Strippers</Link>
          </div>
          <div className="footer-category-box">
            <h3 className="category-box-title">Modules :</h3>
            <Link to="/category/wifi" className="footer-category-link">WiFi</Link>
            <Link to="/category/bluetooth" className="footer-category-link">Bluetooth</Link>
            <Link to="/category/relay" className="footer-category-link">Relay</Link>
            <Link to="/category/display" className="footer-category-link">Displays</Link>
          </div>
          <div className="footer-category-box">
            <h3 className="category-box-title">Power :</h3>
            <Link to="/category/batteries" className="footer-category-link">Batteries</Link>
            <Link to="/category/adapters" className="footer-category-link">Adapters</Link>
            <Link to="/category/solar" className="footer-category-link">Solar Panels</Link>
            <Link to="/category/transformers" className="footer-category-link">Transformers</Link>
          </div>
        </div>
      </div>

      <div className="footer-nav">
        <div className="container">
          <ul className="footer-nav-list">
            <li className="footer-nav-item"><h2 className="nav-title">Shop</h2></li>
            <li className="footer-nav-item"><Link to="/category/microcontrollers" className="footer-nav-link">Microcontrollers</Link></li>
            <li className="footer-nav-item"><Link to="/category/sensors" className="footer-nav-link">Sensors</Link></li>
            <li className="footer-nav-item"><Link to="/category/passives" className="footer-nav-link">Passives & Components</Link></li>
            <li className="footer-nav-item"><Link to="/category/power" className="footer-nav-link">Power & Batteries</Link></li>
            <li className="footer-nav-item"><Link to="/category/displays" className="footer-nav-link">Displays & Modules</Link></li>
            <li className="footer-nav-item"><Link to="/category/tools" className="footer-nav-link">Tools & Kits</Link></li>
          </ul>
          <ul className="footer-nav-list">
            <li className="footer-nav-item"><h2 className="nav-title">Quick Links</h2></li>
            <li className="footer-nav-item"><Link to="/sale" className="footer-nav-link">Clearance Sale</Link></li>
            <li className="footer-nav-item"><Link to="/categories" className="footer-nav-link">New Arrivals</Link></li>
            <li className="footer-nav-item"><Link to="/blog" className="footer-nav-link">Blog & Tutorials</Link></li>
            <li className="footer-nav-item"><Link to="/wishlist" className="footer-nav-link">Wishlist</Link></li>
            <li className="footer-nav-item"><Link to="/cart" className="footer-nav-link">Cart</Link></li>
          </ul>
          <ul className="footer-nav-list">
            <li className="footer-nav-item"><h2 className="nav-title">Support</h2></li>
            <li className="footer-nav-item"><a href="#" className="footer-nav-link">Shipping & Delivery</a></li>
            <li className="footer-nav-item"><a href="#" className="footer-nav-link">Returns & Exchanges</a></li>
            <li className="footer-nav-item"><a href="#" className="footer-nav-link">FAQ</a></li>
            <li className="footer-nav-item"><a href="#" className="footer-nav-link">Track Order</a></li>
            <li className="footer-nav-item"><a href="#" className="footer-nav-link">Contact Us</a></li>
          </ul>
          <ul className="footer-nav-list">
            <li className="footer-nav-item"><h2 className="nav-title">Company</h2></li>
            <li className="footer-nav-item"><a href="#" className="footer-nav-link">About Us</a></li>
            <li className="footer-nav-item"><a href="#" className="footer-nav-link">Careers</a></li>
            <li className="footer-nav-item"><a href="#" className="footer-nav-link">Privacy Policy</a></li>
            <li className="footer-nav-item"><a href="#" className="footer-nav-link">Terms of Service</a></li>
            <li className="footer-nav-item"><a href="#" className="footer-nav-link">Legal Notice</a></li>
          </ul>
          <ul className="footer-nav-list">
            <li className="footer-nav-item"><h2 className="nav-title">Get in Touch</h2></li>
            <li className="footer-nav-item flex">
              <div className="icon-box"><ion-icon name="location-outline"></ion-icon></div>
              <address className="content">123 Circuit Ave, Silicon Valley, CA 94025, USA</address>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box"><ion-icon name="call-outline"></ion-icon></div>
              <a href="tel:+1234567890" className="footer-nav-link">+1 (800) 555-0199</a>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box"><ion-icon name="mail-outline"></ion-icon></div>
              <a href="mailto:support@voltcare.com" className="footer-nav-link">support@voltcare.com</a>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box"><ion-icon name="time-outline"></ion-icon></div>
              <span className="content">Mon – Sat: 9:00 AM – 7:00 PM IST</span>
            </li>

          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ion-icon name="hardware-chip-outline" style={{ color: 'var(--salmon-pink)', fontSize: '24px' }}></ion-icon>
                <span style={{ color: 'var(--salmon-pink)', fontWeight: '700', fontSize: '18px' }}>Voltcare</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '6px' }}>
                <a href="#" aria-label="Facebook" style={{ color: 'var(--sonic-silver)', fontSize: '22px', lineHeight: 1 }}><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="#" aria-label="Twitter" style={{ color: 'var(--sonic-silver)', fontSize: '22px', lineHeight: 1 }}><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="#" aria-label="Instagram" style={{ color: 'var(--sonic-silver)', fontSize: '22px', lineHeight: 1 }}><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="#" aria-label="LinkedIn" style={{ color: 'var(--sonic-silver)', fontSize: '22px', lineHeight: 1 }}><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="#" aria-label="YouTube" style={{ color: 'var(--sonic-silver)', fontSize: '22px', lineHeight: 1 }}><ion-icon name="logo-youtube"></ion-icon></a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="#" className="footer-nav-link" style={{ fontSize: 'var(--fs-8)' }}>Privacy Policy</a>
                <span style={{ color: 'var(--sonic-silver)' }}>|</span>
                <a href="#" className="footer-nav-link" style={{ fontSize: 'var(--fs-8)' }}>Terms of Service</a>
                <span style={{ color: 'var(--sonic-silver)' }}>|</span>
                <a href="#" className="footer-nav-link" style={{ fontSize: 'var(--fs-8)' }}>Cookie Policy</a>
                <span style={{ color: 'var(--sonic-silver)' }}>|</span>
                <a href="#" className="footer-nav-link" style={{ fontSize: 'var(--fs-8)' }}>Sitemap</a>
              </div>
              <p className="copyright" style={{ margin: 0 }}>
                Copyright &copy; {new Date().getFullYear()} <a href="#">Voltcare</a>. All rights reserved. Built by makers, for makers.
              </p>
            </div>

            <img src="/assets/images/payment.png" alt="Accepted payment methods" className="payment-img" style={{ margin: 0 }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
