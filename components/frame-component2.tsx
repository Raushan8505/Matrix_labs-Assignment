import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.tokenomicsContentParent, className].join(" ")}>
      <div className={styles.tokenomicsContent}>
        <div className={styles.tokenomicsTitle}>
          <h1 className={styles.tokenomics}>Tokenomics</h1>
        </div>
        <div className={styles.tokenomicsTable}>
          <div className={styles.itemholder}>
            <div className={styles.tokenomicsCell}>
              <div className={styles.name}>Name</div>
            </div>
            <div className={styles.tokenomicsSeparator}>:</div>
            <div className={styles.aiGen}>AI GEN</div>
          </div>
          <div className={styles.itemholder1}>
            <div className={styles.tokenNameWrapper}>
              <b className={styles.tokenName}>Token Name</b>
            </div>
            <div className={styles.div}>:</div>
            <div className={styles.aigen}>$AIGEN</div>
          </div>
          <div className={styles.itemholder2}>
            <div className={styles.totalSupplyWrapper}>
              <div className={styles.totalSupply}>Total Supply</div>
            </div>
            <div className={styles.div1}>:</div>
            <div className={styles.b}>1B</div>
          </div>
          <div className={styles.itemholder3}>
            <div className={styles.circulatingSupplyWrapper}>
              <div className={styles.circulatingSupply}>Circulating Supply</div>
            </div>
            <div className={styles.div2}>:</div>
            <div className={styles.b1}>1B</div>
          </div>
          <div className={styles.itemholder4}>
            <div className={styles.contractWrapper}>
              <div className={styles.contract}>Contract</div>
            </div>
            <div className={styles.div3}>:</div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className={styles.itemholder5}>
            <div className={styles.chainWrapper}>
              <b className={styles.chain}>Chain</b>
            </div>
            <div className={styles.div4}>:</div>
            <div className={styles.ethereum}>Ethereum</div>
          </div>
        </div>
      </div>
      <div className={styles.tokenomicsChart}>
        <div className={styles.donut}>
          <div className={styles.bnbLpPool}>BNB LP Pool (30%)</div>
          <div className={styles.burned30}>Burned (30%)</div>
          <img
            className={styles.donutChild}
            loading="lazy"
            alt=""
            src="/line-2.svg"
          />
          <div className={styles.lpPool35}>LP Pool (35%)</div>
          <div className={styles.chartLegendParent}>
            <div className={styles.chartLegend}>
              <img
                className={styles.chartLegendChild}
                alt=""
                src="/group-13@2x.png"
              />
              <img
                className={styles.chartLegendItem}
                alt=""
                src="/group-18@2x.png"
              />
            </div>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/line-1.svg"
            />
            <img className={styles.frameItem} alt="" src="/line-2-1.svg" />
            <img className={styles.frameInner} alt="" src="/line-2-2.svg" />
            <img className={styles.lineIcon} alt="" src="/line-1-1.svg" />
            <img className={styles.frameChild1} alt="" src="/line-2-3.svg" />
          </div>
          <div className={styles.partnershipCexWalletContainer}>
            <p className={styles.partnership}>Partnership/</p>
            <p className={styles.cexWallet5}>CEX Wallet (5%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
