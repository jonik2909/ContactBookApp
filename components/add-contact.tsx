import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACRT_ADDRESS } from "../const/addresses";

export default function AddContact() {
  const [addContact, setAddContact] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  function resetForm() {
    setName("");
    setAddress("");
  }

  return (
    <div>
      {!addContact ? (
        <button
          className={styles.addContactTriggerButton}
          onClick={() => setAddContact(true)}
        >
          Add Contact
        </button>
      ) : (
        <div className={styles.addContactContainer}>
          <div className={styles.addContactCard}>
            <button
              className={styles.closeButton}
              onClick={() => setAddContact(false)}
            >
              Close
            </button>
            <div className={styles.addContactForm}>
              <h3>Add Contact:</h3>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="0x0000"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <Web3Button
              contractAddress={CONTRACRT_ADDRESS}
              action={(contract) =>
                contract.call("addContact", [name, address])
              }
              onSuccess={() => {
                resetForm();
                setAddContact(false);
              }}
            >
              Add Contact
            </Web3Button>
          </div>
        </div>
      )}
    </div>
  );
}
