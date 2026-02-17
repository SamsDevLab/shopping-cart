import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Sam's Dev Store</h1>
      <section>
        <button>Home</button>
        <button>Shop</button>
        <button>Cart</button>
      </section>
    </main>
  );
};

export default NavBar;
