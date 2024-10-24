import PropTypes from 'prop-types';

function Product({ product,hendelSelectedProduct }) {
 // console.log(product);
  const { author, cover, genre, id, price, description, title } = product;

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 card card-side bg-base-100 shadow-xl">
      <figure className="flex-1">
        <img src={cover} alt={`${title} cover`} className="pl-1 w-40 rounded-xl" />
      </figure>
      <div className="card-body flex-1 pl-5">
        <h2 className="card-title">{title}</h2>
        <p>
          <span className="text-xl pr-4">{author}</span>
          <span className="badge badge-outline">{genre}</span>
        </p>
        <p>{description}</p>

        <div className="text-xl font-bold">Price: {price} $</div>

        <div className="card-actions ">
          <button onClick={()=>hendelSelectedProduct(product)} className="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
            <span className="px-3.5 py-3 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
            </span>
            <span className="p-2">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    author: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired, // or string, based on your data
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
