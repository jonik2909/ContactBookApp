import { useContract, useContractRead } from "@thirdweb-dev/react";
import ContactCard from "./contact-card";
import { CONTRACRT_ADDRESS } from "../const/addresses";

export default function ContactList() {
  const { contract } = useContract(CONTRACRT_ADDRESS);

  const { data: contacts, isLoading: isLoadingContacts } = useContractRead(
    contract,
    "getContacts"
  );
  console.log(contacts);

  return (
    <div>
      {!isLoadingContacts ? (
        contacts?.length > 0 ? (
          contacts.map((contact: any, index: number) => (
            <ContactCard
              key={index}
              index={index}
              name={contact.name}
              wallet={contact.wallet}
            />
          ))
        ) : (
          <p>No contacts found.</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
