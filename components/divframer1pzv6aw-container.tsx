import type { NextPage } from "next";
import ItemHolder from "./item-holder";
import styles from "./divframer1pzv6aw-container.module.css";

export type Divframer1pzv6awContainerType = {
  className?: string;
};

const Divframer1pzv6awContainer: NextPage<Divframer1pzv6awContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.divframer1pzv6awContainer, className].join(" ")}>
      <div className={styles.div} />
      <div className={styles.holder}>
        <ItemHolder partnership="Partnership" tokens="5% tokens" />
        <ItemHolder
          partnership="LP Pool"
          tokens="35% tokens"
          propOverflowX="unset"
          propBackgroundColor="#ff8f34"
          propWidth="unset"
          propFlex="1"
        />
        <ItemHolder
          partnership="Burned"
          tokens="30% tokens"
          propOverflowX="unset"
          propBackgroundColor="#9a34ff"
          propWidth="unset"
          propFlex="1"
        />
        <ItemHolder
          partnership="BNB LP Pool"
          tokens="30% tokens"
          propOverflowX="auto"
          propBackgroundColor="#028dfd"
          propWidth="254px"
          propFlex="unset"
        />
      </div>
    </div>
  );
};

export default Divframer1pzv6awContainer;
