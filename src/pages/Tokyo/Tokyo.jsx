import classNames from "classnames/bind";
import styles from "./Tokyo.module.scss";
import { Link } from "react-router-dom";
import data from "./data.json";

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
          {data.map((card, index) => {
            return (
              <Link key={card.id} to={card.link} className={cx("card")}>
                <img src={card.img} alt="" />
                <div className={cx("detail-card")}>
                  <h2>{card.title}</h2>
                  <div className={cx("price")}>
                    <span>{card.price}</span>
                  </div>
                  <div className={cx("place-and-time")}>
                    <div className={cx("place")}>{card.place}</div>
                    <div className={cx("time")}>{card.time}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tokyo;
