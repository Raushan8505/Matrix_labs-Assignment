import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./item-holder.module.css";

export type ItemHolderType = {
  className?: string;
  partnership?: string;
  tokens?: string;

  /** Style props */
  propOverflowX?: CSSProperties["overflowX"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const ItemHolder: NextPage<ItemHolderType> = ({
  className = "",
  partnership,
  tokens,
  propOverflowX,
  propBackgroundColor,
  propWidth,
  propFlex,
}) => {
  const itemHolderStyle: CSSProperties = useMemo(() => {
    return {
      overflowX: propOverflowX,
    };
  }, [propOverflowX]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div
      className={[styles.itemholder, className].join(" ")}
      style={itemHolderStyle}
    >
      <div className={styles.itemholderChild} style={rectangleDivStyle} />
      <div className={styles.partnershipWrapper} style={frameDivStyle}>
        <div className={styles.partnership}>{partnership}</div>
      </div>
      <div className={styles.partnershipValue}>
        <div className={styles.emptyValue}>:</div>
      </div>
      <div className={styles.partnershipTokens}>
        <div className={styles.tokens}>{tokens}</div>
      </div>
    </div>
  );
};

export default ItemHolder;
