import * as React from "react";
import classNames from "classnames/bind";
import styles from "./HomeForm.module.scss";
import SelectPlace from "../components/SelectPlace/SelectPlace";
// import SelectActivity from "../components/SelectActivity/SelectActivity";
import PickDate from "../components/PickDate/PickDate";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(styles);

const HomeForm = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Change the route based on the selected value
    if (selectedValue === "1") {
      navigate("/tokyo");
    } else if (selectedValue === "2") {
      navigate("/osaka");
    } else if (selectedValue === "3") {
      navigate("/kyoto");
    } else if (selectedValue === "4") {
      navigate("/okinawa");
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className={cx("home-form")}>
      <div className={cx("form")}>
        <p>Destination</p>
        <SelectPlace handleSelectChange={handleSelectChange} />
      </div>

      {/* <div className={cx("form")}>
        <p>Activity</p>
        <SelectActivity />
      </div> */}

      <div className={cx("form")}>
        <p>Pick Date</p>
        <PickDate />
      </div>

      <div className={cx("form")}>
        <button onClick={handleSubmit} className={cx("form-button")}>
          Search
        </button>
      </div>
    </div>
  );
};

export default HomeForm;
