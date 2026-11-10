import { useState } from "react";
import '../styles/Shop.css'
import '../styles/Wishlist.css'
import jacket from '../assests/jacket.png'
import bea from '../assests/bea.png'
import card from '../assests/card.jpeg'
import beanie from '../assests/beanie.jpg'
import sc from '../assests/sc.jpg'
import cr4 from '../assests/cr4.jpg'
import bear from '../assests/bear.png'
import blanket from '../assests/blanket.png'
import Keychain from '../assests/keychain.png'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaRegHeart, FaHeart } from "react-icons/fa";



const Shop = ({ addToWishlist, isInWishlist, searchProduct, clearSearch }) => {
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const products = [
    {
      name: "Handmade Cardigan",
      price: 89,
      description: " - Cozy, custom-fit.",
      image: jacket,
      category: "🧶 Crochet Wearables",

    },
    {
      name: "Warm Beanie",
      price: 29,
      description: " - Many colors.",
      image: bea,
      category: "🧶 Crochet Wearables",

    },
    {
      name: "Crochet Bunny",
      price: 35,
      description: " - Huggable toy.",
      image: cr4,
      category: "🧸 Amigurumi Toys",

    },
    {
      name: "Teddy Bear",
      price: 45,
      description: " - Keepsake gift.",
      image: bear,
      category: "🧸 Amigurumi Toys",

    },
    {
      name: "Mini Keychain",
      price: 12,
      description: " - Tiny animals.",
      image: Keychain,
      category: "🧸 Amigurumi Toys",

    },
    {
      name: "Throw Blanket",
      price: 120,
      description: " - Warm and textured.",
      image: blanket,
      category: "🧶 Crochet Wearables",

    },
    {
      name: "Handmade Cardigans",
      price: 50,
      description: " - Cozy, custom-fit cardigans in natural fibers.",
      image: card,
      category: "🧶 Crochet Wearables",

    },
    {
      name: "Warm Beanies",
      price: 29,
      description: " - Perfect for winter, many colors available.",
      image: beanie,
      category: "🧶 Crochet Wearables",

    },
    {
      name: "Infinity Scarves",
      price: 30,
      description: " - Soft, elegant, and unique.",
      image: sc,
      category: "🧶 Crochet Wearables",

    },
  ];

  const filteredProducts = products.filter((product) => {
    const searchText = (searchProduct || "").trim().toLowerCase();
    return (
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(searchText)
    );
  });
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.price - b.price;
    }

    if (sortOrder === "high-to-low") {
      return b.price - a.price;
    }

    return 0;
  });
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productIndex = cart.findIndex((item) => item.name === product.name);

    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };
  const getWishlistClass = (product) => {
    if (isInWishlist(product)) {
      return "wishlist-btn added";
    }

    return "wishlist-btn";
  };

  const getWishlistHeart = (product) => {
    if (isInWishlist(product)) {
      return <FaHeart />;
    }

    return <FaRegHeart />;
  };
  const getFilterButtonClass = (buttonCategory) => {
    if (category === buttonCategory) {
      return "filter-btn active";
    }

    return "filter-btn";
  };

  return (


    <div className="shop-page">
      <h1 className="shop-title">All Products</h1>

      <div className="filter-buttons">
        <button
          className={getFilterButtonClass("All")}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={getFilterButtonClass("🧶 Crochet Wearables")}
          onClick={() => setCategory("🧶 Crochet Wearables")}
        >
          🧶 Crochet Wearables
        </button>

        <button
          className={getFilterButtonClass("🧸 Amigurumi Toys")}
          onClick={() => setCategory("🧸 Amigurumi Toys")}
        >
          🧸 Amigurumi Toys
        </button>
      </div>
      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>No products found. Try another search or category.</p>

          <button
            className="filter-btn"
            onClick={() => {
              clearSearch();
              setCategory("All");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
      <div className="shop-sort">
        <label htmlFor="sort-products">Sort by:</label>

        <select
          id="sort-products"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default order</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div className="products-grid">
        {sortedProducts.map((product) => (

          <div className="product-card" key={product.name}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />

            <h3 className="product-name">{product.name}</h3>

            <p className="product-desc">
              ${product.price}{product.description}
            </p>

            <button className="product-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>

            <button
              className={getWishlistClass(product)}
              onClick={() => addToWishlist(product)}
            >
              {getWishlistHeart(product)}
            </button>

          </div>
        ))}
      </div>
    </div>

  );
}
export default Shop;