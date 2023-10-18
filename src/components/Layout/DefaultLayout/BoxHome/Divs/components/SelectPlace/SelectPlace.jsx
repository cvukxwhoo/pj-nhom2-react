import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SelectPlace.module.scss";

const cx = classNames.bind(styles);
const SelectPlace = () => {
  const [value, setValue] = useState("");
  const options = [
    {
      id: 1,
      label: "All Destionation",
      value: 1,
    },
    {
      id: 2,
      label: "Tokyo",
      value: 2,
    },
    {
      id: 3,
      label: "Osaka",
      value: 3,
    },
    {
      id: 4,
      label: "Kyoto",
      value: 4,
    },
    {
      id: 5,
      label: "Nagoya",
      value: 5,
    },
  ];

  function handleSelect(event) {
    setValue(event.target.value);
  }
  console.log(setValue);

  return (
    <div>
      <select key={options.id} className={cx("select")}>
        {options.map((option) => (
          <option
            className={cx("op")}
            value={option.value}
            onChange={handleSelect}
          >
            {option.label}
          </option>
        ))}
      </select>
      <p>{value}</p>
    </div>
    // <div>
    //   <select className={cx("select")}>
    //     <option className={cx("op")} value="1">
    //       All Destination
    //     </option>
    //     <option className={cx("op")} value="2">
    //       Tokyo
    //     </option>
    //     <option className={cx("op")} value="3">
    //       Osaka
    //     </option>
    //     <option className={cx("op")} value="4">
    //       Kyoto
    //     </option>
    //     <option className={cx("op")} value="5">
    //       Nagoya
    //     </option>
    //   </select>
    // </div>
  );
};

export default SelectPlace;
