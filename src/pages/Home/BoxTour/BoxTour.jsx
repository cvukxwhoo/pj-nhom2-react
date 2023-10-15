import classNames from "classnames/bind";
import styles from "./BoxTour.module.scss";
import TitleTour from "./components/TitleTour/TitleTour";
import ContentTour from "./components/ContentTour/ContentTour";

const cx = classNames.bind(styles);
const BoxTour = () => {
  return (
    <>
      <section className={cx("box-tour")}>
        <div className={cx("wrap-tour")}>
          <TitleTour className={cx("title-tour")} />
          <ContentTour className={cx("content-tour")} />
        </div>
      </section>
    </>
  );
};

export default BoxTour;
