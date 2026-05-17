import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const found = productsData.find(p => p.id === id);
    setProduct(found);
  }, [id]);

  if (!product) {
    return <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}><h2>Product not found</h2></div>;
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    alert('Added to cart!');
  };

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className="product-details-grid">
        
        <div>
          <img src={product.img} alt={product.title} style={{ width: '100%', borderRadius: '10px', border: '1px solid var(--cultured)', objectFit: 'cover' }} />
        </div>
        
        <div>
          <Link to={"/category/"+product.category.toLowerCase()} style={{ color: 'var(--salmon-pink)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', fontWeight: '600' }}>
            {product.category}
          </Link>
          <h1 style={{ fontSize: '32px', color: 'var(--eerie-black)', margin: '10px 0 20px' }}>{product.title}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px', color: '#f39c12' }}>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name={product.rating % 1 !== 0 ? "star-half-outline" : "star"}></ion-icon>
            <span style={{ color: 'var(--sonic-silver)', marginLeft: '10px' }}>({product.rating} Rating)</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <span style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--eerie-black)' }}>₹{product.price}</span>
            {product.oldPrice && <del style={{ fontSize: '18px', color: 'var(--sonic-silver)' }}>₹{product.oldPrice}</del>}
          </div>
          
          <p style={{ color: 'var(--sonic-silver)', lineHeight: '1.6', marginBottom: '30px' }}>
            {product.desc}
          </p>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <button 
              onClick={handleAddToCart}
              style={{ backgroundColor: 'var(--salmon-pink)', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ion-icon name="bag-add-outline"></ion-icon> Add to Cart
            </button>
            <button 
              onClick={() => toggleWishlist(product)}
              style={{ backgroundColor: isInWishlist(product.id) ? 'var(--salmon-pink)' : 'var(--cultured)', color: isInWishlist(product.id) ? 'white' : 'var(--eerie-black)', padding: '15px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ion-icon name={isInWishlist(product.id) ? "heart" : "heart-outline"}></ion-icon> Wishlist
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProductDetails;
