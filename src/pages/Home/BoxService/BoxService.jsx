import classNames from "classnames/bind";
import styles from "./BoxService.module.scss";
import CardActivities from "./component/CardActivities/CardActivities";
import CardService from "./component/CardService/CardService";

const cx = classNames.bind(styles);

const BoxService = () => {
  return (
    <>
      <section className={cx("box-service")}>
        <CardActivities className={cx("wrap-activities")} />
        <CardService className={cx("wrap-service")} />
      </section>
    </>
  );
};

export default BoxService;
