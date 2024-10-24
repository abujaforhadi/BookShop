import  { useEffect, useState } from "react";
import Product from "./Product";

function Products({hendelSelectedProduct}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {products.map((product) => (
          <Product hendelSelectedProduct={hendelSelectedProduct} key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
