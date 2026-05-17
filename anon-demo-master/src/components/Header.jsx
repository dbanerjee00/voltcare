import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sidebarCategories, productsData } from '../data';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isExactMatch, setIsExactMatch] = useState(true);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      setIsExactMatch(true);
      return;
    }
    const q = query.toLowerCase();
    let results = productsData.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      p.desc.toLowerCase().includes(q)
    );
    
    if (results.length > 0) {
      setIsExactMatch(true);
      setSearchResults(results.slice(0, 6));
    } else {
      setIsExactMatch(false);
      // Fallback related products
      setSearchResults(productsData.slice(0, 3)); 
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      <div className="overlay" data-overlay></div>

      <div className="notification-toast" data-toast>
        <button className="toast-close-btn" data-toast-close>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="toast-banner">
          <img src="https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=80" alt="ESP32 WiFi Module" width="80" height="70" style={{objectFit: 'cover'}} />
        </div>
        <div className="toast-detail">
          <p className="toast-message">Someone in New York just bought</p>
          <p className="toast-title">ESP32 WiFi Module</p>
          <p className="toast-meta"><time dateTime="PT2M">2 Minutes</time> ago</p>
        </div>
      </div>

      <header>
        <div className="header-main">
          <div className="container">
            <Link to="/" className="header-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/assets/images/products/logo.png" alt="Voltcare Logo" width="40" height="40" style={{ objectFit: 'contain' }} />
              <h1 style={{color: 'var(--salmon-pink)', fontSize: '32px', margin: 0}} className="header-logo-text">
                Voltcare
              </h1>
            </Link>
            <div className="header-search-container" style={{ position: 'relative' }}>
              <input type="search" name="search" className="search-field" placeholder="Enter component name..." value={searchQuery} onChange={handleSearch} autoComplete="off" />
              <button className="search-btn"><ion-icon name="search-outline"></ion-icon></button>

              {searchQuery && searchResults.length > 0 && (
                <div className="search-dropdown" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', backgroundColor: 'var(--white)', zIndex: 100, borderRadius: 'var(--border-radius-md)', border: '1px solid var(--cultured)', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', marginTop: '5px', maxHeight: '400px', overflowY: 'auto' }}>
                  {!isExactMatch && (
                    <div style={{ padding: '10px 15px', backgroundColor: 'var(--cultured)', color: 'var(--sonic-silver)', fontSize: '0.85rem', fontWeight: 'bold' }}>
                      No exact matches. Showing related products:
                    </div>
                  )}
                  {searchResults.map(item => (
                    <div key={item.id} onClick={() => { navigate(`/product/${item.id}`); setSearchQuery(''); setSearchResults([]); }} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px 15px', borderBottom: '1px solid var(--cultured)', cursor: 'pointer', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--cultured)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                      <img src={item.img} alt={item.title} width="40" height="40" style={{ objectFit: 'cover', borderRadius: '4px' }} />
                      <div style={{ overflow: 'hidden' }}>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--eerie-black)', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</p>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--salmon-pink)', fontWeight: 'bold' }}>₹{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="header-user-actions">
              <button className="action-btn" onClick={toggleTheme} title="Toggle Theme">
                <ion-icon name={isDarkMode ? "sunny-outline" : "moon-outline"}></ion-icon>
              </button>
              {user ? (
                <button className="action-btn" onClick={logout} title="Logout (Logged in as: ${user.name})">
                  <ion-icon name="log-out-outline"></ion-icon>
                </button>
              ) : (
                <button className="action-btn" onClick={() => navigate('/login')} title="Login">
                  <ion-icon name="person-outline"></ion-icon>
                </button>
              )}
              <button className="action-btn" onClick={() => navigate('/wishlist')} title="Wishlist">
                <ion-icon name="heart-outline"></ion-icon>
                <span className="count">{wishlistCount}</span>
              </button>
              <button className="action-btn" onClick={() => navigate('/cart')}>
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span className="count">{cartCount}</span>
              </button>
            </div>
          </div>
        </div>

        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className="menu-category"><Link to="/" className="menu-title">Home</Link></li>
              <li className="menu-category">
                <Link to="/categories" className="menu-title">Categories</Link>
                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title"><Link to="/category/microcontrollers">Microcontrollers</Link></li>
                    <li className="panel-list-item"><Link to="/category/arduino">Arduino</Link></li>
                    <li className="panel-list-item"><Link to="/category/raspberry-pi">Raspberry Pi</Link></li>
                    <li className="panel-list-item"><Link to="/category/esp">ESP32/ESP8266</Link></li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title"><Link to="/category/sensors">Sensors</Link></li>
                    <li className="panel-list-item"><Link to="/category/temperature">Temperature</Link></li>
                    <li className="panel-list-item"><Link to="/category/motion">Motion</Link></li>
                    <li className="panel-list-item"><Link to="/category/light">Light & Color</Link></li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title"><Link to="/category/components">Components</Link></li>
                    <li className="panel-list-item"><Link to="/category/resistors">Resistors</Link></li>
                    <li className="panel-list-item"><Link to="/category/capacitors">Capacitors</Link></li>
                    <li className="panel-list-item"><Link to="/category/transistors">Transistors</Link></li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title"><Link to="/category/power">Power</Link></li>
                    <li className="panel-list-item"><Link to="/category/batteries">Batteries</Link></li>
                    <li className="panel-list-item"><Link to="/category/modules">Modules</Link></li>
                    <li className="panel-list-item"><Link to="/category/adapters">Adapters</Link></li>
                  </ul>
                </div>
              </li>
              <li className="menu-category">
                <Link to="/category/microcontrollers" className="menu-title">Microcontrollers</Link>
                <ul className="dropdown-list">
                  <li className="dropdown-item"><Link to="/category/arduino">Arduino Boards</Link></li>
                  <li className="dropdown-item"><Link to="/category/raspberry">Raspberry Pi</Link></li>
                  <li className="dropdown-item"><Link to="/category/esp32">ESP32 Modules</Link></li>
                  <li className="dropdown-item"><Link to="/category/stm32">STM32 Boards</Link></li>
                </ul>
              </li>
              <li className="menu-category">
                <Link to="/category/sensors" className="menu-title">Sensors</Link>
                <ul className="dropdown-list">
                  <li className="dropdown-item"><Link to="/category/temperature">Temperature Sensors</Link></li>
                  <li className="dropdown-item"><Link to="/category/motion">Motion Sensors</Link></li>
                  <li className="dropdown-item"><Link to="/category/light">Light Sensors</Link></li>
                  <li className="dropdown-item"><Link to="/category/pressure">Pressure Sensors</Link></li>
                </ul>
              </li>
              <li className="menu-category">
                <Link to="/category/modules" className="menu-title">Modules</Link>
                <ul className="dropdown-list">
                  <li className="dropdown-item"><Link to="/category/relay">Relay Modules</Link></li>
                  <li className="dropdown-item"><Link to="/category/wifi">WiFi Modules</Link></li>
                  <li className="dropdown-item"><Link to="/category/bluetooth">Bluetooth Modules</Link></li>
                  <li className="dropdown-item"><Link to="/category/display">Display Modules</Link></li>
                </ul>
              </li>
              <li className="menu-category">
                <Link to="/category/tools" className="menu-title">Tools</Link>
                <ul className="dropdown-list">
                  <li className="dropdown-item"><Link to="/category/soldering">Soldering Irons</Link></li>
                  <li className="dropdown-item"><Link to="/category/multimeter">Multimeters</Link></li>
                  <li className="dropdown-item"><Link to="/category/stripper">Wire Strippers</Link></li>
                  <li className="dropdown-item"><Link to="/category/oscilloscope">Oscilloscopes</Link></li>
                </ul>
              </li>
              <li className="menu-category"><Link to="/blog" className="menu-title">Blog</Link></li>
              <li className="menu-category"><Link to="/sale" className="menu-title">Clearance Sale</Link></li>
            </ul>
          </div>
        </nav>

        <div className="mobile-bottom-navigation">
          <button className="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
          <button className="action-btn" onClick={() => navigate('/cart')}>
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span className="count">{cartCount}</span>
          </button>
          <Link to="/" className="action-btn">
            <ion-icon name="home-outline"></ion-icon>
          </Link>
          <button className="action-btn" onClick={() => navigate('/wishlist')} title="Wishlist">
            <ion-icon name="heart-outline"></ion-icon>
            <span className="count">{wishlistCount}</span>
          </button>
          <button className="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="grid-outline"></ion-icon>
          </button>
        </div>

        <nav className="mobile-navigation-menu has-scrollbar" data-mobile-menu>
          <div className="menu-top">
            <h2 className="menu-title">Menu</h2>
            <button className="menu-close-btn" data-mobile-menu-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
          <ul className="mobile-menu-category-list">
            <li className="menu-category"><Link to="/" className="menu-title">Home</Link></li>
            {sidebarCategories.map((cat, idx) => (
              <li className="menu-category" key={idx}>
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">{cat.title}</p>
                  <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                  </div>
                </button>
                <ul className="submenu-category-list" data-accordion>
                  {cat.items.map((sub, i) => (
                    <li className="submenu-category" key={i}>
                      <Link to={"/category/"+sub.name.toLowerCase()} className="submenu-title">{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="menu-category"><Link to="/blog" className="menu-title">Blog</Link></li>
            <li className="menu-category"><Link to="/sale" className="menu-title">Clearance Sale</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
