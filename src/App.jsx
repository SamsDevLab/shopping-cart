import "./App.css";
import { Link } from "react-router";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <header>
        <h1>Sam's Dev Store</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
