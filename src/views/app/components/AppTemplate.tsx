import { Box } from "@chakra-ui/react";
import { FC } from "react";
import WalletProvider from "../providers/Wallet";
import Navbar from "./Navbar";

interface IAppTemplate {
    children?: any
}
const AppTemplate: FC<IAppTemplate> = ({ children }) => {
    return (
        <WalletProvider>
            <Navbar />
            
            {
                children
            }
        </WalletProvider>
    )
}
export default AppTemplate