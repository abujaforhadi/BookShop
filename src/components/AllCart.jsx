import PropTypes from 'prop-types';
import Cart from "./Cart";
import History from "./History";

function AllCart({ hendelActiveBtn, activeBtn,selectedProduct,handleDelete }) {
  return (
    <div>
      <h1>AllCard</h1>
      <div className="flex justify-center gap-8 ">
        <button
          onClick={() => hendelActiveBtn("cart")}
          className={`${activeBtn.cart ? "btn btn-outline bg-green-400" : "btn btn-outline"}`}
        >
          Cart
        </button>
        <button
          onClick={() => hendelActiveBtn("history")}
          className={`${activeBtn.cart ? "btn btn-outline" : "btn btn-outline bg-green-400"}`}
        >
          History
        </button>
      </div>

      {activeBtn.cart ? <Cart handleDelete={handleDelete} selectedProduct={selectedProduct} /> : <History />}
    </div>
  );
}

AllCart.propTypes = {
  hendelActiveBtn: PropTypes.func.isRequired,
  activeBtn: PropTypes.shape({
    cart: PropTypes.bool.isRequired,
    history: PropTypes.bool, 
  }).isRequired,
};

export default AllCart;
