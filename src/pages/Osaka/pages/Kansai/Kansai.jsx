import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";
import styles from "../component/styles.module.scss";
import SlideShow from "./SlideShow/SlideShow";
import highlight from "./highlight.json";
import important from "./important.json";
import description from "./description.json";
////// DatePicker /////
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";

///// PhoneNumber ////
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

const cx = classNames.bind(styles);

const Kansai = () => {
  // GetItem //
  const savedInputValue = localStorage.getItem("savedInputValue");
  const savedDateValue = localStorage.getItem("savedDateValue");

  // useState value phone and date
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  /////////// INPUT String ///////

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  /////////// DatePicker ////////////////
  dayjs.extend(customParseFormat);
  const dateFormatList = ["DD-MM-YYYY"];

  // Local Storage setItem //
  const handleSubmit = () => {
    alert("Success! Wait us contact against to you");
    localStorage.setItem("savedInputValue", inputValue);
    localStorage.setItem("savedDateValue", dateValue);
  };

  return (
    <div className={cx("container")}>
      <h1>5-Day Kansai WIDE Area Pass E-Voucher [For Tourists] - JR West</h1>
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
                The 5-day Kansai WIDE Area Pass from JR West helps you save on
                traveling within Kansai! Get five days' worth of unlimited rides
                on the Sanyo Shinkansen, local trains, Kyoto Tango Railway,
                Chizu Express, Wakayama Electric Railway, and West JR Bus in the
                valid area. This pass is available only for those entering Japan
                on a Temporary Visitor visa.
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
                The Kansai WIDE Area Excursion Pass helps you save money while
                exploring the Kansai region in western Japan, home to some of
                Japan's most popular tourist areas. Enjoy the beauty of Kansai
                for 5 days with unlimited rides on the Sanyo Shinkansen
                (selected sections of the route only), JR West trains (local,
                rapid, special rapid, and Limited Express) and buses, as well as
                selected private railways.
              </p>

              <div className={cx("break-word")}>
                Infants (ages 1–5) and babies (younger) travel for free on JR
                trains except in the following cases, when a child ticket is
                required:
                <ul style={{ margin: " 20px 0" }}>
                  {description.map((Descrip, index) => {
                    return <li key={index}>{Descrip.content}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* ------- Content Right ---------- */}
          <div className={cx("content-right")}>
            <div className={cx("wrap-right")}>
              <div className={cx("select-option", "mb-3")}>Selected Option</div>
              <h2 className={cx("title", "mb-3")}>
                <div></div>
              </h2>
              <div className={cx("total-price")}>
                <label htmlFor="">Total</label>
                <div className={cx("price")}>
                  <span>12,000 JPY</span>
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
                <Space direction="vertical" size={12}>
                  <DatePicker
                    defaultValue={dayjs("17/10/2023", dateFormatList[0])}
                    format={dateFormatList}
                    selected={dateValue}
                    onChange={(date) => setDateValue(date)}
                  />
                </Space>
              </div>

              {/* phone number */}
              <div className={cx("fill-ur-num")}>
                <div className={cx("phone")}>
                  Your phone number or email we will contact for you later
                </div>
              </div>
              <Input
                size="large"
                placeholder="Your Phone or Email"
                prefix={<UserOutlined />}
                value={inputValue}
                onChange={handleInputChange}
              />
              {/* Done */}

              <button onClick={handleSubmit} className={cx("btn-submit")}>
                Book with your option
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kansai;
