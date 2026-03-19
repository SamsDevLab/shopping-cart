import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
import homeLogo from "./assets/svgs/home.svg";
import shopLogo from "./assets/svgs/shop.svg";
import cartLogo from "./assets/svgs/cart.svg";
import emailLogo from "./assets/svgs/email.svg";
import phoneLogo from "./assets/svgs/phone.svg";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchedResults = (async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        return response.json();
      } catch (error) {
        console.error(error);
      }
    })();

    fetchedResults.then((response) => {
      const newArr = response.map((product) => {
        delete product.description;

        const capitalizedStr = product.category
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        const newObj = {
          ...product,
          category: capitalizedStr,
          addedToCart: false,
          quantity: 1,
        };
        return newObj;
      });

      setProductList(newArr);
    });
  }, []);

  const productsInCart = productList
    .map((product) => {
      if (product.addedToCart === true) {
        return 1;
      } else return 0;
    })
    .reduce((acc, current) => acc + current, 0);

  return (
    <>
      <header>
        <h1>Orion Supply</h1>
        <nav>
          <div className={styles.headerLinkDiv}>
            <img src={homeLogo} alt="Home" />
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </div>
          <div className={styles.headerLinkDiv}>
            <img src={shopLogo} alt="Shop" />
            <Link to="shop" className={styles.link}>
              Shop
            </Link>
          </div>
          <div className={styles.headerLinkDiv}>
            <img src={cartLogo} alt="Cart" />
            {productsInCart > 0 ? (
              <span className={styles.cartCount}>{productsInCart}</span>
            ) : null}
            <Link to="cart" className={styles.link}>
              Cart
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet context={[productList, setProductList]} />
      </main>
      <footer>
        <h2>Orion Supply</h2>
        <div className={styles.allLinks}>
          <h2>Links</h2>
          <div className={styles.footerLinkDiv}>
            <img src={homeLogo} alt="Home" />
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </div>
          <div className={styles.footerLinkDiv}>
            <img src={shopLogo} alt="Shop" />
            <Link to="shop" className={styles.link}>
              Shop
            </Link>
          </div>
          <div className={styles.footerLinkDiv}>
            <img src={cartLogo} alt="Cart" />
            <Link to="cart" className={styles.link}>
              Cart
            </Link>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <h2>Contact Us</h2>
          <div className={styles.communicationDiv}>
            <img src={emailLogo} alt="email" />
            <h3>sendit@fakeco.com</h3>
          </div>
          <div className={styles.communicationDiv}>
            <img src={phoneLogo} alt="phone" />
            <h3>555.555.5555</h3>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
