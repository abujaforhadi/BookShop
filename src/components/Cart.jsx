function Cart({ selectedProduct, handleDelete }) {
    const products = selectedProduct;
  
    return (
      <div>
        <ul>
          {products.map((p) => (
            <li key={p.id} className="flex justify-between items-center p-2 border-b">
              {/* Product Title */}
              <span>{p.title}</span>
  
              {/* Product Price */}
              <span className="text-green-600 font-bold">${p.price}</span>
  
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Cart;
  