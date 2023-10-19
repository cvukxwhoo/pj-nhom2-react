import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";

const cx = classNames.bind(styles);
function Header() {
  return (
    <>
      <nav className={cx("box-navbar")}>
        <header className={cx("wrapper")}>
          <div className={cx("inner")}>
            {/* Logo */}
            <Logo className={cx("menu")} />
            {/* Menu   */}

            <div className={cx("wrap-menu")}>
              <Menu className={cx("menu")} />

              {/* Components */}
              <div className={cx("box-cta")}>
                <Link className={cx("cta")} to="/user">
                  <FontAwesomeIcon style={{ color: "#fff" }} icon={faUser} />
                </Link>
                <Link className={cx("cta")} to="/shopping">
                  <FontAwesomeIcon
                    style={{ color: "#fff" }}
                    icon={faCartShopping}
                  />
                </Link>
                <Link to="/search" className={cx("cta")}>
                  <FontAwesomeIcon
                    style={{ color: "#fff" }}
                    icon={faMagnifyingGlass}
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
}

export default Header;

{
  /* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="main-header-logo">
          <Navbar.Brand href="#home">Entrada</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="main-header-content">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Link to="/destination">Destination</Link>
              <Link to="/listing">Listings</Link>
              <Link to="/activities">Activities</Link>
              <Link to="/page">Pages</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar> */
}
