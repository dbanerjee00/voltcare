import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '60px 0', textAlign: 'center', minHeight: '50vh' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--eerie-black)' }}>Your Cart is Empty</h2>
        <Link to="/" style={{ color: 'var(--salmon-pink)', textDecoration: 'underline' }}>Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '60px 0', minHeight: '60vh' }}>
      <h2 style={{ marginBottom: '30px', color: 'var(--eerie-black)' }}>Shopping Cart</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item-row">
            <img src={item.img} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }} />
            <div style={{ flex: 1 }}>
              <Link to={"/product/"+item.id} style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--eerie-black)' }}>{item.title}</Link>
              <p style={{ color: 'var(--sonic-silver)', marginTop: '5px' }}>₹{item.price}</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '5px 10px', border: '1px solid var(--cultured)', background: 'var(--white)', cursor: 'pointer' }}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '5px 10px', border: '1px solid var(--cultured)', background: 'var(--white)', cursor: 'pointer' }}>+</button>
            </div>
            
            <div style={{ width: '100px', textAlign: 'right', fontWeight: 'bold' }}>
              ₹{item.price * item.quantity}
            </div>
            
            <button onClick={() => removeFromCart(item.id)} style={{ padding: '5px', color: 'red', background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px' }}>
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Total: <span style={{ color: 'var(--salmon-pink)' }}>₹{cartTotal}</span></h3>
        <button style={{ backgroundColor: 'var(--eerie-black)', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
