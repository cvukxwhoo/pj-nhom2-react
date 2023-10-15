/* eslint-disable no-unused-vars */

import classNames from "classnames/bind";
import styles from "./BoxAdventure.module.scss";
import AdventureTitle from "./components/AdventureTitle/AdventureTitle";
import ContentAdventure from "./components/ContentAdventure/ContentAdventure";
import InforAdventure from "./components/InforAdventure/InforAdventure";

const cx = classNames.bind(styles);

const BoxAdventure = () => {
  return (
    <section className={cx("box-adventure")}>
      <div className={cx("wrap-adventure")}>
        <AdventureTitle />
        <ContentAdventure />
      </div>
      <InforAdventure />
    </section>
  );
};

export default BoxAdventure;
