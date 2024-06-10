import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.roadmapContentParent, className].join(" ")}>
      <div className={styles.roadmapContent}>
        <h1 className={styles.roadmap}>Roadmap</h1>
      </div>
      <div className={styles.divframerFddg71}>
        <div className={styles.roadmapPhase}>
          <div className={styles.heading2}>
            <h1 className={styles.phase1}>PHASE 1</h1>
          </div>
          <div className={styles.phaseDescription}>
            <div className={styles.horizenDaiDaiContainer}>
              <ul className={styles.horizenDaiDaiHarmonyDogeco}>
                <li
                  className={styles.horizenDaiDai}
                >{`Horizen dai dai harmony dogecoin waves nexo. `}</li>
                <li
                  className={styles.flowHorizenWaves}
                >{`Flow horizen waves dash tether zcash waves dash terraUSD. `}</li>
                <li
                  className={styles.quantHarmonyAmp}
                >{`Quant harmony amp cosmos PancakeSwap decentraland decred. `}</li>
                <li>
                  Serum TRON solana tether holo crypto. Flow eCash amp EOS
                  digibyte stellar.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          className={styles.roadmapPlaceholderIcon}
          loading="lazy"
          alt=""
          src="/divframerfs660q@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
