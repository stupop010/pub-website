import Link from "next/link";

const NavBar = () => (
  <div className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-row-reverse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link>
          <a className="nav-link">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link>
          <a className="nav-link">Reservation</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link>
          <a className="nav-link">Menu</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
