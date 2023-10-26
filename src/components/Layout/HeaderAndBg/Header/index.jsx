import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import Cta from "./components/Cta/Cta";

const cx = classNames.bind(styles);
function Header() {
  return (
    <>
      <nav className={cx("box-navbar", "scroll-menu")}>
        {/* Wrap Navbar */}
        <div className={cx("wrapper")}>
          {/* - Logo */}
          <Logo className={cx("box-logo")} />
          {/* - Wrap Menu*/}
          <div className={cx("box-menu")}>
            {/* Menu */}
            <Menu className={cx("wrap-menu")} />
            {/* CTA */}
            <Cta className={cx("box-cta")} />
          </div>
        </div>
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
