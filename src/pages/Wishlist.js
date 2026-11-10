import React from "react";
import "../styles/Wishlist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function WishlistPage({ wishlist, removeFromWishlist }) {
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item.name === product.name
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className="wishlist-page">
      <h1 className="wishlist-page-title">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="empty-wishlist">No items in wishlist yet.</p>
      ) : (
        <div className="wishlist-page-grid">
          {wishlist.map((item, index) => (
            <div className="wishlist-page-card" key={index}>
              <img
                src={item.image}
                alt={item.name}
                className="wishlist-page-img"
              />

              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button
                className="product-btn"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
              <button
                className="product-btn"
                onClick={() => removeFromWishlist(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default WishlistPage;