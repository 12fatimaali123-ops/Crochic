import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WishlistPage from "./pages/Wishlist";
import Personalinfo from "./pages/Personalinfo";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [wishlist, setWishlist] = useState(() => {
  try {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    return Array.isArray(savedWishlist) ? savedWishlist : [];
  } catch {
    return [];
  }
});
useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}, [wishlist]);
  const [searchProduct, setSearchProduct] = useState("");

  const addToWishlist = (product) => {
    const alreadyAdded = wishlist.find((item) => item.name === product.name);

    if (alreadyAdded) {
      setWishlist(wishlist.filter((item) => item.name !== product.name));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (product) => {
    return wishlist.find((item) => item.name === product.name);
  };

  const productSearchFunction = (e) => {
    setSearchProduct(e.target.value);
  };

  const clearSearch = () => {
    setSearchProduct("");
  };

  return (
    <Router>
      <Navbar
        wishlist={wishlist}
        searchProduct={searchProduct}
        productSearchFunction={productSearchFunction}
        clearSearch={clearSearch}
      />
      <main className="main-content">

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={
            <Shop
              addToWishlist={addToWishlist}
              isInWishlist={isInWishlist}
              searchProduct={searchProduct}
                clearSearch={clearSearch}

            />
          }
        />

        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} removeFromWishlist={addToWishlist}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/personalinfo" element={<Personalinfo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </main>


      <Footer />
    </Router>
  );
}

export default App;
