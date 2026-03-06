import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";

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

    fetchedResults.then((response) => setProductList(response));
  }, []);

  // console.log(productList);

  /* 
  Start here tomorrow 03/06
  • Need to figure out how to dynamically pass in productList props to Outlet
  component using the context feature. 
  • Also need to pass in a function similar to the one below to ensure that child
  components can update the Product List (need to be able to include Cart: added
  or something similar to ensure that Cart only has items with that distinction)
  • Need to be able to dynamically pass this data so that comps like Home and
  Cart only get certain items
  */

  return (
    <>
      <header>
        <h1>Sam's Great Outdoors</h1>
        <nav>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="shop" className="link">
            Shop
          </Link>
          <Link to="cart" className="link">
            Cart
          </Link>
        </nav>
      </header>
      <main>
        <Outlet context={[productList, setProductList]} />
      </main>
      <footer>
        <div className="title-and-mission">
          <h2>Sam's Great Outdoors</h2>
          <p>It ain't gonna make you proficient - but it will help.</p>
        </div>
        <div className="all-links">
          <h2>Links</h2>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="shop" className="link">
            Shop
          </Link>
          <Link to="cart" className="link">
            Cart
          </Link>
        </div>
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="email">
            {/* <img src="" alt="" /> */}
            <h3>Email: justgonnasendit@fakecompany.com</h3>
          </div>
          <div className="phone">
            {/* <img src="" alt="" /> */}
            <h3>Phone: 555.555.5555</h3>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
