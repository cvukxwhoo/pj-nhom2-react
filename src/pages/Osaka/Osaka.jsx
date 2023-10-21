import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Osaka.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Osaka = () => {
  return (
    <div className={cx("container")}>
      {/* ------------------- */}
      {/* Title Header */}
      <div className={cx("title-header")}>
        <h2>Recommend sightseeing and Travel experiences in Tokyo</h2>
      </div>
      {/* Cards */}
      <div className={cx("cards-item")}>
        <div className={cx("card")}>
          <Link to="/search">
            <Card
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src="https://prod-rte-static.rakutentravelxchange.com/a0316d8e-8919-4101-b7ef-5b0918add146.jpg?width=400"
                />
              }
            >
              <Meta title="Card title" description="This is the description" />
            </Card>
          </Link>
          <div className={cx("place-and-time")}>
            <FontAwesomeIcon icon={faClock} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Osaka;
