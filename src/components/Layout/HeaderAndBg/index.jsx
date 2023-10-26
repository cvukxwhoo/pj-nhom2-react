import Header from "./Header";
import Footer from "./Footer/Footer";
import BoxBanner from "./BoxBanner/BoxBanner";

const HeaderAndBg = ({ children }) => {
  return (
    <div>
      <Header />
      <BoxBanner />
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
};

export default HeaderAndBg;
