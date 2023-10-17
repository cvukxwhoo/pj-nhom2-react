import classNames from "classnames/bind";
import styles from "./WrapFooter.module.scss";
import InforMore from "./components/InforMore/InforMore";
import IconContact from "./components/IconContact/IconContact";

const cx = classNames.bind(styles);

const WrapFooter = () => {
  return (
    <div className={cx("wrap-footer")}>
      <InforMore className={cx("infor-more")} />
      <IconContact className={cx("infor-contact")} />
    </div>
  );
};

export default WrapFooter;
