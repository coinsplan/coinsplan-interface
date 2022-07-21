import { FC } from "react";
import TransactionCard from "./components/TransactionCard";

const sampleTransactions = [
  {
    txId: "7f6f0a97ef69fae75e3f3a53e657a6f79a8",
    from: {
      address: "0xef2a3d4f567a8f8aea65d43fe4a986cc",
      name: "Me",
    },
    to: {
      address: "0xef2a3d4f567a8f8aea65d43fe4a986cc",
      name: "Grab Holdings Inc.",
    },
    time: "",
    state: 2,
  },
  {
    txId: "7f6f0a97ef69fae75e3f3a53e657a6f79a8",
    from: {
      address: "0xef2a3d4f567a8f8aea65d43fe4a986cc",
      name: "Me",
    },
    to: {
      address: "0xef2a3d4f567a8f8aea65d43fe4a986cc",
      name: "Spotify Technology S.A.",
    },
    time: "",
    state: 1,
  },
  {
    txId: "7f6f0a97ef69fae75e3f3a53e657a6f79a8",
    from: {
      address: "0xef2a3d4f567a8f8aea65d43fe4a986cc",
      name: "Me",
    },
    to: {
      address: "0xef2a3d4f567a8f8aea65d43fe4a986cc",
      name: "Coinbase Global, Inc.",
    },
    time: "",
    state: 2,
  },
];

const TransactionTable: FC = () => {
  return (
    <>
      {sampleTransactions.map((tx, index) => (
        <TransactionCard key={index} tx={tx} />
      ))}
    </>
  );
};
export default TransactionTable;
