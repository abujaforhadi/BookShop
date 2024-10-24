import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import AllCart from "./components/AllCart";

function App() {
  const [activeBtn, setActiveBtn] = useState({
    cart: true,
    status: "active",
  });
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [price, setPrice] = useState(0); // Initialize total price

  // Function to handle product deletion and update the total price
  const handleDelete = (productId) => {
    const productToDelete = selectedProduct.find(
      (product) => product.id === productId
    );

    if (productToDelete) {
      // Update the selected products list by removing the deleted product
      const updatedProducts = selectedProduct.filter(
        (product) => product.id !== productId
      );
      setSelectedProduct(updatedProducts);

      // Update the total price after removing the product
      setPrice(price - productToDelete.price);
    }
  };

  // Function to handle product selection and avoid duplicates
  const hendelSelectedProduct = (newProduct) => {
    const isDuplicate = selectedProduct.some(
      (product) => product.id === newProduct.id
    );

    if (!isDuplicate) {
      // Add the new product to the selected products list
      setSelectedProduct([...selectedProduct, newProduct]);

      // Update the total price after adding the new product
      setPrice(price + newProduct.price);
    } else {
      alert("Product is already selected.");
    }
  };

  // Function to toggle between 'cart' and 'history' views
  const hendelActiveBtn = (status) => {
    if (status === "cart") {
      setActiveBtn({
        cart: true,
        status: "cart",
      });
    } else {
      setActiveBtn({
        cart: false,
        status: "history",
      });
    }
  };

  // Display the total price in the Header
  const showPrice = () => price;

  return (
    <>
      <Header price={showPrice()} /> {/* Pass total price to Header */}

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
          />
        </div>
      </div>
    </>
  );
}

export default App;
