import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "./MichelinStar.module.scss";
import SlideShow from "../../components/SlideShow/SlideShow";
import DatePickerValue from "../../components/DatePickerValue/DatePickerValue";
import PhoneNumber from "../../components/PhoneNumber/PhoneNumber";
import highlight from "./highlight.json";
import important from "./important.json";
import description from "./description.json";

const cx = classNames.bind(styles);

const MichelinStar = () => {
  return (
    <div className={cx("container")}>
      <h1>Reservation for Sukiyabashi Jiro Roppongi 2 Michelin Star Tokyo</h1>
      <div className={cx("content-wrapper")}>
        {/* Image */}
        <div className={cx("image-main")}>
          <SlideShow />
        </div>
        {/* Content */}
        <div className={cx("content-main")}>
          <div className={cx("content-left")}>
            {/* Overview */}
            <div className={cx("overview")}>
              <h2>Overview</h2>
              <p className={cx("break-word")}>
                Prepared with exacting dedication, sushi at Sukiyabashi Jiro is
                world-famous for its exceptional quality. Secure a Sukiyabashi
                Jiro Roppongi reservation to taste some of Tokyo&apos;s finest
                sushi at the restaurant&apos;s 2-Michelin-star Roppongi branch
              </p>
            </div>
            {/* Highlight */}
            <div className={cx("highlight")}>
              <h2>Highlight</h2>
              <div className={cx("break-word")}>
                <ul>
                  {highlight.map((Highlight, index) => {
                    return <li key={index}>{Highlight.content}</li>;
                  })}
                </ul>
              </div>
            </div>
            <hr
              style={{
                margin: "20px 0",
                border: "none",
                borderBottom: "3px solid #000",
              }}
            />
            {/* Important Info */}
            <div className={cx("important-info")}>
              <h2>Important Information</h2>
              <div className={cx("break-word")}>
                <ul>
                  {important.map((Important, index) => {
                    return <li key={index}>{Important.content}</li>;
                  })}
                </ul>
              </div>
            </div>
            {/* divider */}
            <hr
              style={{
                margin: "20px 0",
                border: "none",
                borderBottom: "3px solid #000",
              }}
            />

            {/* Description */}
            <div className={cx("description")}>
              <h2>Description</h2>
              <p className={cx("break-word")}>
                If you&apos;re visiting Tokyo and hoping to try sushi by the Ono
                family, we can help you secure a seat at its 2 Michelin star
                Jiro Roppongi branch! Run by Jiro Ono&apos;s son Takashi, here,
                you can savor sushi made with the same passion, traditions, and
                methods of Jiro Ono.
              </p>

              <p className={cx("break-word")}>
                With our Jiro reservations, you can choose from two lunch
                courses and two dinner courses:
                <ul style={{ margin: " 20px 0" }}>
                  {description.map((Descrip, index) => {
                    return <li key={index}>{Descrip.content}</li>;
                  })}
                </ul>
              </p>
            </div>
          </div>

          {/* ------- Content Right ---------- */}
          <div className={cx("content-right")}>
            <div className={cx("wrap-right")}>
              <div className={cx("select-option", "mb-3")}>Selected Option</div>
              <h2 className={cx("title", "mb-3")}>
                <div>18-Piece Sushi + 4 Kinds of Sashimi Dinner Course</div>
              </h2>
              <div className={cx("total-price")}>
                <label htmlFor="">Total</label>
                <div className={cx("price")}>
                  <span>29,040 JPY</span>
                </div>
              </div>
              <hr
                style={{
                  margin: "20px 0",
                  border: "none",
                  borderBottom: "3px solid #000",
                }}
              />
              <div className={cx("select-date")}>
                <div className={cx("date")}>
                  Check availability and select date
                </div>
                <DatePickerValue />
              </div>

              {/* phone number */}
              <div className={cx("fill-ur-num")}>
                <div className={cx("phone")}>
                  Your phone number or email we will contact for you later
                </div>
              </div>
              <PhoneNumber />
              {/* Done */}

              <button className={cx("btn-submit")}>
                Book with your option
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MichelinStar;
