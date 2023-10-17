import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import WrapFooter from "./components/WrapFooter/WrapFooter";
import CopyRight from "./components/CopyRight/CopyRight";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer>
      <div className={cx("box-footer")}>
        <WrapFooter className={cx("wrap-footer")} />
      </div>
      <CopyRight className={cx("copyright")} />
    </footer>
  );
}

export default Footer;
