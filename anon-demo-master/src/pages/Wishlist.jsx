import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="container" style={{ padding: '60px 0', textAlign: 'center', minHeight: '50vh' }}>
        <ion-icon name="heart-outline" style={{ fontSize: '64px', color: 'var(--salmon-pink)', marginBottom: '20px' }}></ion-icon>
        <h2 style={{ marginBottom: '20px', color: 'var(--eerie-black)' }}>Your Wishlist is Empty</h2>
        <p style={{ color: 'var(--sonic-silver)', marginBottom: '20px' }}>Save your favorite items here!</p>
        <Link to="/" style={{ color: 'var(--salmon-pink)', textDecoration: 'underline' }}>Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '60px 0', minHeight: '60vh' }}>
      <h2 style={{ marginBottom: '30px', color: 'var(--eerie-black)' }}>My Wishlist ({wishlistItems.length})</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {wishlistItems.map(item => (
          <div key={item.id} className="wishlist-item-row">
            <img src={item.img} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }} />
            <div style={{ flex: 1 }}>
              <Link to={"/product/"+item.id} style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--eerie-black)' }}>{item.title}</Link>
              <p style={{ color: 'var(--sonic-silver)', marginTop: '5px' }}>₹{item.price}</p>
            </div>

            <button
              onClick={() => addToCart(item)}
              style={{ padding: '10px 20px', backgroundColor: 'var(--salmon-pink)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <ion-icon name="bag-add-outline"></ion-icon> Add to Cart
            </button>

            <button onClick={() => removeFromWishlist(item.id)} style={{ padding: '5px', color: 'red', background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px' }}>
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
