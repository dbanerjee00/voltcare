import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newProducts } from '../data';
import { useCart } from '../context/CartContext';

function CategoryPage({ title, saleOnly }) {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Determine page title
  const pageTitle = title || (id ? id.charAt(0).toUpperCase() + id.slice(1) : 'All Categories');

  // Filter products based on URL param or saleOnly flag
  let displayedProducts = newProducts;
  if (saleOnly) {
    displayedProducts = newProducts.filter(p => p.badge === 'sale');
  } else if (id) {
    // If an ID is provided, filter or show all if we don't have enough data
    displayedProducts = newProducts.filter(p => p.category.toLowerCase().includes(id.toLowerCase()) || p.title.toLowerCase().includes(id.toLowerCase()));
    if (displayedProducts.length === 0) {
      displayedProducts = newProducts; // fallback to all products if no match
    }
  }

  return (
    <main style={{ padding: '60px 0' }}>
      <div className="product-container">
        <div className="container">
          <div className="product-main" style={{ width: '100%' }}>
            <h2 className="title" style={{ marginBottom: '30px' }}>{pageTitle}</h2>
            <div className="product-grid">
              {displayedProducts.map((prod) => (
                <div className="showcase" key={prod.id}>
                  <div className="showcase-banner">
                    <Link to={"/product/"+prod.id}>
                      <img src={prod.img1} alt={prod.title} width="300" className="product-img default" style={{objectFit: 'cover', height: '250px'}} />
                      <img src={prod.img2} alt={prod.title} width="300" className="product-img hover" style={{objectFit: 'cover', height: '250px'}} />
                    </Link>
                    
                    {prod.badge && <p className={`showcase-badge ${prod.badgeClass}`}>{prod.badge}</p>}

                    <div className="showcase-actions">
                      <button className="btn-action"><ion-icon name="heart-outline"></ion-icon></button>
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
    </main>
  );
}

export default CategoryPage;
