import { Center } from "@chakra-ui/react";
import { FC } from "react";
import { useAccount } from "wagmi";

const DashboardBody: FC = () => {
  const { data: account } = useAccount();
  return account === null ? 
  (
    <Center>Please connect the wallet</Center>
  ) : (
    <>1234</>
  );
};
export default DashboardBody;
