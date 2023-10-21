import classNames from "classnames/bind";
import styles from "./Tokyo.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Tokyo = () => {
  return (
    <div className={cx("container")}>
      {/* ------------------- */}
      {/* Title Header */}
      <div className={cx("title-header")}>
        <h2>Recommend sightseeing and Travel experiences in Tokyo</h2>
      </div>
      {/* ------------------- */}
      {/* Card Map */}
      <div className={cx("cards-item")}>
        <div className={cx("cards")}>
          <Link className={cx("card")}>
            <img
              src="https://prod-rte-static.rakutentravelxchange.com/a0316d8e-8919-4101-b7ef-5b0918add146.jpg?width=400"
              alt=""
            />
            <div className={cx("detail-card")}>
              <h2>title</h2>
              <div className={cx("price")}>
                <span>price</span>
              </div>
              <div className={cx("place-and-time")}>
                <div className={cx("place")}>place</div>
                <div className={cx("time")}>time</div>
              </div>
            </div>
          </Link>

          <Link className={cx("card")}>
            <img
              src="https://prod-rte-static.rakutentravelxchange.com/a0316d8e-8919-4101-b7ef-5b0918add146.jpg?width=400"
              alt=""
            />
            <div className={cx("detail-card")}>
              <h2>title</h2>
              <div className={cx("price")}>
                <span>price</span>
              </div>
              <div className={cx("place-and-time")}>
                <div className={cx("place")}>place</div>
                <div className={cx("time")}>time</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tokyo;
