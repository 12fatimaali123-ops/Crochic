import React, { useState } from "react";
import "../styles/Cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeFromCart = (productName) => {
    const newCart = cart.filter((item) => item.name !== productName);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  const updateQuantity = (productName, change) => {
    const updatedCart = cart.map((item) =>
      item.name === productName
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-page">
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-card" key={index}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.name, -1)}
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => updateQuantity(item.name, 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <button onClick={() => removeFromCart(item.name)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;