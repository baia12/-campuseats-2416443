import { useState } from "react";
import Header from "./components/Header";
import VendorCard from "./components/VendorCard";
import MenuItemCard from "./components/MenuItemCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="container">
        <title>Today's vendors</title>
        <VendorCard />
        <div className="grid">
          <title>Popular items</title>
          <MenuItemCard />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
