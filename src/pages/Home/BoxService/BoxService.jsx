import classNames from "classnames/bind";
import styles from "./BoxService.module.scss";
import CardActivities from "./component/CardActivities/CardActivities";

const cx = classNames.bind(styles);

const BoxService = () => {
  return (
    <>
      <section className={cx("box-service")}>
        <div className={cx("wrap-activities")}>
          <CardActivities className={cx("card-activiti")} />
        </div>
        ;
      </section>
    </>
  );
};

export default BoxService;
