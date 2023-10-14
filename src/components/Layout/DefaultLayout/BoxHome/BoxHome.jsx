import classNames from "classnames/bind";
import styles from "./BoxHome.module.scss";
import HomeTitle from "./Divs/HomeTitle/HomeTitle";
import HomeForm from "./Divs/HomeForm/HomeForm";
import Feature from "./Divs/Feature/Feature";

const cx = classNames.bind(styles);
const BoxHome = () => {
  return (
    <section className={cx("box-home")}>
      <img src="https://entrada.webtravel.vn/image/bg-home1.jpg" alt="img-bg" />
      <div className={cx("filter-bg")}></div>
      <div className={cx("home-content")}>
        {/* div className:home-title */}
        <HomeTitle />
        {/* div className:home-form*/}
        <HomeForm />
        {/* div className: home-feature */}
      </div>
      <Feature />
    </section>
  );
};

export default BoxHome;
