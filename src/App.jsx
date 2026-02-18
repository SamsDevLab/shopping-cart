import "./App.css";
import { Link } from "react-router";
import { Outlet } from "react-router";

function App() {
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
        <Outlet />
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
    </> // Turn this into a fragment when you return (console.log error)
    // and place the body styling in the index.css file
  );
}

export default App;
