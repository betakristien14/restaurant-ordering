function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          🍽️ RestoKu
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Cart (0)
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <button className="btn btn-warning">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;