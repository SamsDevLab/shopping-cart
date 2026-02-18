import "./App.css";
import { Link } from "react-router";
import { Outlet } from "react-router";

function App() {
  return (
    <body>
      <header>
        <h1>Sam's Dev Store</h1>
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
    </body>
  );
}

export default App;
