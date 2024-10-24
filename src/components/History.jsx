
import PropTypes from 'prop-types';

function History({ historyPage }) {
  const products = historyPage;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Purchase History</h2>
      <ul>
        {products.length === 0 ? (
          <li className="text-gray-500">No history available.</li>
        ) : (
          products.map((p) => (
            <li key={p.id} className="flex justify-between items-center p-2 border-b">
              {/* Product Title */}
              <span>{p.title}</span>

              {/* Product Price */}
              <span className="text-green-600 font-bold">${p.price.toFixed(2)}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

// Define PropTypes for the component
History.propTypes = {
  historyPage: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default History;
