import classNames from "classnames/bind";
import styles from "./CardService.module.scss";

const cx = classNames.bind(styles);

const CardService = () => {
  return (
    <div className={cx("wrap-service")}>
      <div className={cx("card-service")}>
        <div className={cx("img-service")}>
          <img
            src="https://cdn.audleytravel.com/3601/2573/79/15979501-aharen-beach-okinawa-japan.jpg"
            alt=""
          />
        </div>
        <div className={cx("infor-service")}>
          <h3>Go to Onikawa</h3>
          <p>
            Okinawa is an archipelago of Japan, located in the south of the
            country, consisting of more than 150 small and large islands.
          </p>
          <button>Explore</button>
        </div>
      </div>

      {/* card service cs2 */}
      <div className={cx("card-service")}>
        <div className={cx("infor-service")}>
          <h3>Discovery of Yamanashi</h3>
          <p>
            In addition to Japan's most sacred mountain, this naturally rich
            area also includes the picturesque Fuji Five Lakes, the Kiyosato
            plateau resort nestled in the middle of nature, and solemn
            historical sites such as Erinji Temple. and Kuonji temple, many
            wonderful hot springs, and some of Japan's best wineries.
          </p>
          <button>Explore</button>
        </div>
        <div className={cx("img-service")}>
          <img
            src="https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-yamanashi-15.jpg?tr=dpr-2,w-675"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardService;
