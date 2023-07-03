
export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-transparent px-3 px-md-5">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-2 text-black" href="#">
            Landing
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link fw-bold fs-6 text-black" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold fs-6 text-black" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold fs-6 text-black" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold fs-6 text-black" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

