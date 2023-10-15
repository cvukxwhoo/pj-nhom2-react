import classNames from "classnames/bind";
import styles from "./BoxTour.module.scss";
import TitleTour from "./components/TitleTour/TitleTour";

const cx = classNames.bind(styles);
const BoxTour = () => {
  return (
    <>
      <section className={cx("box-tour")}>
        <div className={cx("wrap-tour")}>
          <TitleTour />
        </div>
      </section>
    </>
  );
};

export default BoxTour;
