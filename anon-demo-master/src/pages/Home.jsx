import React from 'react';
import { banners, categoriesRow, bestSellers, newArrivals, trending, topRated, dealsOfDay, newProducts, blogs, sidebarCategories } from '../data';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import DotField from '../components/DotField';

function Home() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <main>
      {/* BANNERS */}
      <div className="banner" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <DotField
            dotRadius={1.5}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={true}
            waveAmplitude={0}
            gradientFrom="var(--salmon-pink)"
            gradientTo="var(--sonic-silver)"
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="slider-container has-scrollbar">
            {banners.map((item) => (
              <div className="slider-item" key={item.id}>
                <img src={item.img} alt={item.title} className="banner-img" style={{objectFit: 'cover'}} />
                <div className="banner-content">
                  <p className="banner-subtitle">{item.subtitle}</p>
                  <h2 className="banner-title">{item.title}</h2>
                  <p className="banner-text">{item.pricePrefix}<b>{item.priceAmount}</b>{item.priceSuffix}</p>
                  <Link to="/categories" className="banner-btn">{item.btnText}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CATEGORIES ROW */}
      <div className="category">
        <div className="container">
          <div className="category-item-container has-scrollbar">
            {categoriesRow.map((cat) => (
              <div className="category-item" key={cat.id}>
                <div className="category-img-box">
                  <ion-icon name={cat.icon} style={{fontSize: '30px', color: 'var(--salmon-pink)'}}></ion-icon>
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">{cat.title}</h3>
                    <p className="category-item-amount">({cat.amount})</p>
                  </div>
                  <Link to={"/category/"+cat.title.toLowerCase()} className="category-btn">Show all</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="product-container">
        <div className="container">
          <div className="sidebar has-scrollbar" data-mobile-menu>
            {/* Sidebar Category List */}
            <div className="sidebar-category">
              <div className="sidebar-top">
                <h2 className="sidebar-title">Category</h2>
                <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>
              <ul className="sidebar-menu-category-list">
                {sidebarCategories.map((cat, idx) => (
                  <li className="sidebar-menu-category" key={idx}>
                    <button className="sidebar-accordion-menu" data-accordion-btn>
                      <div className="menu-title-flex">
                        <ion-icon name={cat.icon} style={{fontSize: '20px', marginRight: '10px'}}></ion-icon>
                        <p className="menu-title">{cat.title}</p>
                      </div>
                      <div>
                        <ion-icon name="add-outline" className="add-icon"></ion-icon>
                        <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                      </div>
                    </button>
                    <ul className="sidebar-submenu-category-list" data-accordion>
                      {cat.items.map((sub, i) => (
                        <li className="sidebar-submenu-category" key={i}>
                          <Link to={"/category/"+sub.name.toLowerCase()} className="sidebar-submenu-title">
                            <p className="product-name">{sub.name}</p>
                            <data value={sub.stock} className="stock" title="Available Stock">{sub.stock}</data>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Sellers */}
            <div className="product-showcase">
              <h3 className="showcase-heading">best sellers</h3>
              <div className="showcase-wrapper">
                <div className="showcase-container">
                  {bestSellers.map((item) => (
                    <div className="showcase" key={item.id}>
                      <Link to={"/product/"+item.id} className="showcase-img-box">
                        <img src={item.img} alt={item.title} width="75" height="75" className="showcase-img" style={{objectFit: 'cover'}} />
                      </Link>
                      <div className="showcase-content">
                        <Link to={"/product/"+item.id}><h4 className="showcase-title">{item.title}</h4></Link>
                        <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon><ion-icon name="star-half-outline"></ion-icon>
                        </div>
                        <div className="price-box">
                          <del>₹{item.oldPrice}</del>
                          <p className="price">₹{item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="product-box">
            {/* MINIMAL PRODUCTS SECTION */}
            <div className="product-minimal">
              {/* New Arrivals */}
              <div className="product-showcase">
                <h2 className="title">New Arrivals</h2>
                <div className="showcase-wrapper has-scrollbar">
                  {/* First column (4 items) */}
                  <div className="showcase-container">
                    {newArrivals.slice(0, 4).map(item => (
                      <div className="showcase" key={item.id}>
                        <Link to={"/product/"+item.id} className="showcase-img-box">
                          <img src={item.img} alt={item.title} width="70" className="showcase-img" style={{objectFit: 'cover'}} />
                        </Link>
                        <div className="showcase-content">
                          <Link to={"/product/"+item.id}><h4 className="showcase-title">{item.title}</h4></Link>
                          <Link to={"/category/"+item.category.toLowerCase()} className="showcase-category">{item.category}</Link>
                          <div className="price-box">
                            <p className="price">₹{item.price}</p>
                            <del>₹{item.oldPrice}</del>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Second column (4 items) */}
                  <div className="showcase-container">
                    {newArrivals.slice(4, 8).map(item => (
                      <div className="showcase" key={item.id}>
                        <Link to={"/product/"+item.id} className="showcase-img-box">
                          <img src={item.img} alt={item.title} width="70" className="showcase-img" style={{objectFit: 'cover'}} />
                        </Link>
                        <div className="showcase-content">
                          <Link to={"/product/"+item.id}><h4 className="showcase-title">{item.title}</h4></Link>
                          <Link to={"/category/"+item.category.toLowerCase()} className="showcase-category">{item.category}</Link>
                          <div className="price-box">
                            <p className="price">₹{item.price}</p>
                            <del>₹{item.oldPrice}</del>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trending */}
              <div className="product-showcase">
                <h2 className="title">Trending</h2>
                <div className="showcase-wrapper has-scrollbar">
                  <div className="showcase-container">
                    {trending.slice(0, 4).map(item => (
                      <div className="showcase" key={item.id}>
                        <Link to={"/product/"+item.id} className="showcase-img-box">
                          <img src={item.img} alt={item.title} width="70" className="showcase-img" style={{objectFit: 'cover'}} />
                        </Link>
                        <div className="showcase-content">
                          <Link to={"/product/"+item.id}><h4 className="showcase-title">{item.title}</h4></Link>
                          <Link to={"/category/"+item.category.toLowerCase()} className="showcase-category">{item.category}</Link>
                          <div className="price-box">
                            <p className="price">₹{item.price}</p>
                            <del>₹{item.oldPrice}</del>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="showcase-container">
                    {trending.slice(4, 8).map(item => (
                      <div className="showcase" key={item.id}>
                        <Link to={"/product/"+item.id} className="showcase-img-box">
                          <img src={item.img} alt={item.title} width="70" className="showcase-img" style={{objectFit: 'cover'}} />
                        </Link>
                        <div className="showcase-content">
                          <Link to={"/product/"+item.id}><h4 className="showcase-title">{item.title}</h4></Link>
                          <Link to={"/category/"+item.category.toLowerCase()} className="showcase-category">{item.category}</Link>
                          <div className="price-box">
                            <p className="price">₹{item.price}</p>
                            <del>₹{item.oldPrice}</del>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Rated */}
              <div className="product-showcase">
                <h2 className="title">Top Rated</h2>
                <div className="showcase-wrapper has-scrollbar">
                  <div className="showcase-container">
                    {topRated.slice(0, 4).map(item => (
                      <div className="showcase" key={item.id}>
                        <Link to={"/product/"+item.id} className="showcase-img-box">
                          <img src={item.img} alt={item.title} width="70" className="showcase-img" style={{objectFit: 'cover'}} />
                        </Link>
                        <div className="showcase-content">
                          <Link to={"/product/"+item.id}><h4 className="showcase-title">{item.title}</h4></Link>
                          <Link to={"/category/"+item.category.toLowerCase()} className="showcase-category">{item.category}</Link>
                          <div className="price-box">
                            <p className="price">₹{item.price}</p>
                            <del>₹{item.oldPrice}</del>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="showcase-container">
                    {topRated.slice(4, 8).map(item => (
                      <div className="showcase" key={item.id}>
                        <Link to={"/product/"+item.id} className="showcase-img-box">
                          <img src={item.img} alt={item.title} width="70" className="showcase-img" style={{objectFit: 'cover'}} />
                        </Link>
                        <div className="showcase-content">
                          <Link to={"/product/"+item.id}><h4 className="showcase-title">{item.title}</h4></Link>
                          <Link to={"/category/"+item.category.toLowerCase()} className="showcase-category">{item.category}</Link>
                          <div className="price-box">
                            <p className="price">₹{item.price}</p>
                            <del>₹{item.oldPrice}</del>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* DEAL OF THE DAY */}
            <div className="product-featured">
              <h2 className="title">Deal of the day</h2>
              <div className="showcase-wrapper has-scrollbar">
                {dealsOfDay.map(deal => (
                  <div className="showcase-container" key={deal.id}>
                    <div className="showcase">
                      <div className="showcase-banner">
                        <img src={deal.img} alt={deal.title} className="showcase-img" style={{objectFit: 'cover', height: '350px'}} />
                      </div>
                      <div className="showcase-content">
                        <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon><ion-icon name="star-half-outline"></ion-icon>
                        </div>
                        <Link to={"/product/"+deal.productRef}><h3 className="showcase-title">{deal.title}</h3></Link>
                        <p className="showcase-desc">{deal.desc}</p>
                        <div className="price-box">
                          <p className="price">{deal.price}</p>
                          <del>{deal.oldPrice}</del>
                        </div>
                        <button className="add-cart-btn" onClick={() => {
                          const productItem = newProducts.find(p => p.id === deal.productRef);
                          if(productItem) addToCart(productItem);
                        }}>add to cart</button>
                        <div className="showcase-status">
                          <div className="wrapper">
                            <p>already sold: <b>{deal.sold}</b></p>
                            <p>available: <b>{deal.available}</b></p>
                          </div>
                          <div className="showcase-status-bar"></div>
                        </div>
                        <div className="countdown-box">
                          <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                          <div className="countdown">
                            <div className="countdown-content"><p className="display-number">360</p><p className="display-text">Days</p></div>
                            <div className="countdown-content"><p className="display-number">24</p><p className="display-text">Hours</p></div>
                            <div className="countdown-content"><p className="display-number">59</p><p className="display-text">Min</p></div>
                            <div className="countdown-content"><p className="display-number">00</p><p className="display-text">Sec</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NEW PRODUCTS MAIN GRID */}
            <div className="product-main">
              <h2 className="title">New Products</h2>
              <div className="product-grid">
                {newProducts.map((prod) => (
                  <div className="showcase" key={prod.id}>
                    <div className="showcase-banner">
                      <Link to={"/product/"+prod.id}>
                        <img src={prod.img1} alt={prod.title} width="300" className="product-img default" style={{objectFit: 'cover', height: '250px'}} />
                        <img src={prod.img2} alt={prod.title} width="300" className="product-img hover" style={{objectFit: 'cover', height: '250px'}} />
                      </Link>
                      
                      {prod.badge && <p className={`showcase-badge ${prod.badgeClass}`}>{prod.badge}</p>}

                      <div className="showcase-actions">
                        <button className="btn-action" onClick={() => toggleWishlist(prod)}><ion-icon name={isInWishlist(prod.id) ? "heart" : "heart-outline"}></ion-icon></button>
                        <Link to={"/product/"+prod.id} className="btn-action"><ion-icon name="eye-outline"></ion-icon></Link>
                        <button className="btn-action"><ion-icon name="repeat-outline"></ion-icon></button>
                        <button className="btn-action" onClick={() => addToCart(prod)}><ion-icon name="bag-add-outline"></ion-icon></button>
                      </div>
                    </div>

                    <div className="showcase-content">
                      <Link to={"/category/"+prod.category.toLowerCase()} className="showcase-category">{prod.category}</Link>
                      <h3><Link to={"/product/"+prod.id} className="showcase-title">{prod.title}</Link></h3>
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon><ion-icon name="star-outline"></ion-icon>
                      </div>
                      <div className="price-box">
                        <p className="price">₹{prod.price}</p>
                        <del>₹{prod.oldPrice}</del>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* TESTIMONIALS & CTA */}
      <div>
        <div className="container">
          <div className="testimonials-box">
            <div className="testimonial">
              <h2 className="title">testimonial</h2>
              <div className="testimonial-card">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="alan doe" className="testimonial-banner" width="80" height="80" style={{borderRadius: '50%'}} />
                <p className="testimonial-name">Alan Doe</p>
                <p className="testimonial-title">CEO & Founder ElectroMakers</p>
                <img src="/assets/images/icons/quotes.svg" alt="quotation" className="quotation-img" width="26" />
                <p className="testimonial-desc">
                  Voltcare provides the best quality electronic components I've ever used. Highly recommended for any makers out there!
                </p>
              </div>
            </div>

            <div className="cta-container">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" alt="summer collection" className="cta-banner" style={{objectFit: 'cover'}} />
              <Link to="/sale" className="cta-content">
                <p className="discount">25% Discount</p>
                <h2 className="cta-title">Maker Collection</h2>
                <p className="cta-text">Starting @ ₹799</p>
                <button className="cta-btn">Shop now</button>
              </Link>
            </div>

            <div className="service">
              <h2 className="title">Our Services</h2>
              <div className="service-container">
                {[
                  { icon: "boat-outline", title: "Worldwide Delivery", desc: "For Order Over ₹8000" },
                  { icon: "rocket-outline", title: "Next Day delivery", desc: "UK Orders Only" },
                  { icon: "call-outline", title: "Best Online Support", desc: "Hours: 8AM - 11PM" },
                  { icon: "arrow-undo-outline", title: "Return Policy", desc: "Easy & Free Return" },
                  { icon: "ticket-outline", title: "30% money back", desc: "For Order Over ₹8000" },
                ].map((srv, idx) => {
                  return (
                    <div className="service-item" key={idx}>
                      <div className="service-icon">
                        <ion-icon name={srv.icon}></ion-icon>
                      </div>
                      <div className="service-content">
                        <h3 className="service-title">{srv.title}</h3>
                        <p className="service-desc">{srv.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOGS */}
      <div className="blog">
        <div className="container">
          <div className="blog-container has-scrollbar">
            {blogs.map(post => {
              const blogUrl = "/blog/" + post.id;
              return (
                <div className="blog-card" key={post.id}>
                  <Link to={blogUrl}>
                    <img src={post.img} alt={post.title} width="300" className="blog-banner" style={{objectFit: 'cover', height: '200px'}} />
                  </Link>
                  <div className="blog-content">
                    <Link to={blogUrl} className="blog-category">{post.category}</Link>
                    <h3><Link to={blogUrl} className="blog-title">{post.title}</Link></h3>
                    <p className="blog-meta">
                      By <cite>Mr {post.author}</cite> / <time>{post.date}</time>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
