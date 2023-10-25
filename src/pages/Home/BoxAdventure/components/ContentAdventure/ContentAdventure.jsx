import classNames from "classnames/bind";
import styles from "./ContentAdventure.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import Data from "./Data";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const ContentAdventure = () => {
  return (
    <div className={cx("content-adventure")}>
      {/* ////////////////////////////////////////////// */}
      {/* photo-adven */}
      <div className={cx("photo-adventure")}>
        {Data.map((data, index) => {
          return (
            <Link to={data.path} className={cx("photo-card")} key={index}>
              <img src={data.src} alt="Tokyo" />
              <div className={cx("info-card")}>
                <FontAwesomeIcon
                  className={cx("person-walking-icon")}
                  icon={faPersonWalking}
                />
                <p>{data.content}</p>
              </div>
            </Link>
          );
        })}
      </div>
      {/* /////////////////////////////////////////////////////////// */}
      {/* text-adven */}
      <div className={cx("text-adventure")}>
        <h3>Living a Life of Adventure</h3>
        <p>
          Most people’s dream destination, Japan, has recently opened its
          borders to leisure travellers. This news pretty much brought out our
          inner hodophiles who are dying to visit all the latest attractions in
          Japan that we’ve missed. From Instagrammable gardens and aquariums to
          your childhood-favourite characters coming to life, there are many new
          attractions in Japan worth checking out.
        </p>
      </div>
    </div>
  );
};

export default ContentAdventure;
