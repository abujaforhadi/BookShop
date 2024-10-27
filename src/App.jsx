import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import AllCart from "./components/AllCart";
import Footer from "./components/Footer";

function App() {
  const [activeBtn, setActiveBtn] = useState({
    cart: true,
    status: "active",
  });
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [price, setPrice] = useState(0);
  const [historyPage, setHistoryPage] = useState([]); // Fixed typo in state declaration

  // Function to handle product deletion and update history
  const handleDelete = (productId) => {
    const productToDelete = selectedProduct.find(
      (product) => product.id === productId
    );

    if (productToDelete) {
      // Add the deleted product to the history
      const updatedHistory = [...historyPage, productToDelete];
      setHistoryPage(updatedHistory);

      // Remove the deleted product from the selected products
      const updatedProducts = selectedProduct.filter(
        (product) => product.id !== productId
      );
      setSelectedProduct(updatedProducts);

      // Update the total price after removing the product
      setPrice(price - productToDelete.price);
    }
  };

  // Function to handle product selection
  const hendelSelectedProduct = (newProduct) => {
    const isDuplicate = selectedProduct.some(
      (product) => product.id === newProduct.id
    );

    if (!isDuplicate) {
      setSelectedProduct([...selectedProduct, newProduct]);
      setPrice(price + newProduct.price);
    } else {
      alert("Product is already selected.");
    }
  };

  // Function to toggle between cart and history views
  const hendelActiveBtn = (status) => {
    setActiveBtn({
      cart: status === "cart",
      status: status,
    });
  };
  const showPrice = () => price;

  return (
    <>
      <Header price={showPrice()} />

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2 p-4 md:order-1 order-2">
          <Products hendelSelectedProduct={hendelSelectedProduct} />
        </div>

        <div className="md:col-span-1 p-4 md:order-2 order-1">
          <AllCart
            selectedProduct={selectedProduct}
            handleDelete={handleDelete}
            activeBtn={activeBtn}
            hendelActiveBtn={hendelActiveBtn}
            historyPage={historyPage} // Pass historyPage to AllCart
          />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
