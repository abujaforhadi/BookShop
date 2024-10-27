function Header({ price }) {
  const available = 250; // Available amount

  // Calculate the remaining balance
  const remainingBalance = available - price;

  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Book <span className="text-green-500">Shop</span></a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <p>Total price: {price.toFixed(2)} $</p>
            <p>Remaining Balance: {remainingBalance.toFixed(2)} $</p> {/* Display remaining balance */}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
