import { Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { CONTRACRT_ADDRESS } from "../const/addresses";

type Props = {
  index: number;
  name: string;
  wallet: string;
};

export default function ContactCard({ index, name, wallet }: Props) {
  return (
    <div className={styles.contactCardContainer}>
      <div className={styles.contactCardInfo}>
        <h2>{name}</h2>
        <p>Wallet Address:</p>
        <p>{wallet}</p>
      </div>
      <Web3Button
        className={styles.removeContactButton}
        contractAddress={CONTRACRT_ADDRESS}
        action={(contract) => contract.call("removeContact", [index])}
      >
        x
      </Web3Button>
    </div>
  );
}
