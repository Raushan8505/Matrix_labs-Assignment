import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.diveoze3fWrapper, className].join(" ")}>
      <header className={styles.diveoze3f}>
        <div className={styles.nav}>
          <div className={styles.brandContainer}>
            <div className={styles.logoContainer}>
              <nav className={styles.divframer1s63yblWrapper}>
                <nav className={styles.divframer1s63ybl}>
                  <a className={styles.aigen}>AI.GEN</a>
                  <nav className={styles.navigationLinks}>
                    <div className={styles.pricingLink}>
                      <div className={styles.pricingLabel}>
                        <a className={styles.linkPricing}>Features</a>
                      </div>
                    </div>
                    <div className={styles.linkItems}>
                      <div className={styles.linkContent}>
                        <div className={styles.linkLabels}>
                          <a className={styles.roadmap}>Roadmap</a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.linkItems1}>
                      <div className={styles.divframer1jhepv2}>
                        <div className={styles.pframerText}>
                          <a className={styles.tokenomics}>Tokenomics</a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </nav>
              </nav>
              <div className={styles.buttonSmallButtonParent}>
                <button className={styles.buttonSmallButton}>
                  <img
                    className={styles.beforemaskGroupIcon}
                    alt=""
                    src="/beforemaskgroup.svg"
                  />
                  <div className={styles.divframerU1rd7n} />
                  <div className={styles.divframer16octgt} />
                  <div className={styles.buttonContent}>
                    <div className={styles.divframerSqwfwm}>
                      <div className={styles.buttonLabels}>
                        <a className={styles.whitepaper}>Whitepaper</a>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.buttonSmallButton1}>
                  <img
                    className={styles.beforemaskGroupIcon1}
                    alt=""
                    src="/beforemaskgroup1.svg"
                  />
                  <div className={styles.divframerU1rd7n1} />
                  <div className={styles.divframer16octgt1} />
                  <div className={styles.divframer1pea9t3}>
                    <div className={styles.divframerSqwfwm1}>
                      <div className={styles.pframerText1}>
                        <a className={styles.getStarted}>Get Started</a>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent4;
