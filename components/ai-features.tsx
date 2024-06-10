import type { NextPage } from "next";
import styles from "./ai-features.module.css";

export type AiFeaturesType = {
  className?: string;
};

const AiFeatures: NextPage<AiFeaturesType> = ({ className = "" }) => {
  return (
    <div className={[styles.aiFeatures, className].join(" ")}>
      <div className={styles.aiFeaturesContent}>
        <div className={styles.aiFeaturesColumns}>
          <div className={styles.aiFeaturesColumn}>
            <div className={styles.aiFeature}>
              <h2 className={styles.aiOutfits}>
                <p className={styles.ai}>AI</p>
                <p className={styles.outfits}>Outfits</p>
              </h2>
            </div>
            <div className={styles.avatarImageContainer}>
              <img className={styles.divIcon} alt="" src="/div.svg" />
              <div className={styles.div} />
            </div>
            <div className={styles.iqcslqmu6s3lakdixkj3osrybeepn}>
              <div className={styles.shoe}>
                <div className={styles.shoeBg} />
                <img
                  className={styles.redShoeIcon}
                  loading="lazy"
                  alt=""
                  src="/red-shoe@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.aiFeaturesColumnTwo}>
            <div className={styles.aiFeatureTwo}>
              <div className={styles.aiFeatureTitle}>
                <h2 className={styles.realisticAiAvatarContainer}>
                  <p className={styles.realisticAi}>Realistic AI</p>
                  <p className={styles.avatar}>Avatar</p>
                </h2>
              </div>
              <img
                className={styles.cj3scv4ralnnf6b194y2lyy3ykpngIcon}
                loading="lazy"
                alt=""
                src="/cj3scv4ralnnf6b194y2lyy3ykpng@2x.png"
              />
              <div className={styles.div1} />
            </div>
          </div>
        </div>
        <div className={styles.aiFeaturesColumns1}>
          <div className={styles.divframer1q5y23j}>
            <div className={styles.divframer1b13r57Container}>
              <div className={styles.generateOrWriteYourScriptWrapper}>
                <h2 className={styles.generateOrWrite}>
                  Generate or Write your Script
                </h2>
              </div>
              <img
                className={styles.aiFeatureImage}
                loading="lazy"
                alt=""
                src="/divframer1wc2mr1@2x.png"
              />
              <div className={styles.div2} />
            </div>
          </div>
          <div className={styles.divframer1q5y23j1}>
            <div className={styles.divframer1b13r57Container1}>
              <div className={styles.aiPoweredVoiceGenratorWrapper}>
                <h2 className={styles.aiPoweredVoiceGenrator}>
                  AI-Powered Voice Genrator
                </h2>
              </div>
              <img
                className={styles.divframer1wc2mr1Icon}
                alt=""
                src="/divframer1wc2mr1-1@2x.png"
              />
              <div className={styles.div3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiFeatures;
