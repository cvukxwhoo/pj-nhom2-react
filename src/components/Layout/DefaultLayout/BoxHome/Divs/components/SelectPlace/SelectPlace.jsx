import classNames from "classnames/bind";
import styles from "./SelectPlace.module.scss";

const cx = classNames.bind(styles);
const SelectPlace = ({ handleSelectChange }) => {
  const options = [
    {
      label: "All Destination",
      value: 1,
    },
    {
      label: "Tokyo",
      value: 2,
    },
    {
      label: "Osaka",
      value: 3,
    },
    {
      label: "Kyoto",
      value: 4,
    },
    {
      label: "Nagoya",
      value: 5,
    },
  ];

  return (
    <select onChange={handleSelectChange} className={cx("select")}>
      {options.map((option, index) => {
        return (
          <option className={cx("op")} key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
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
