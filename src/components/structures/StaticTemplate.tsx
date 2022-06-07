import { Box } from "@chakra-ui/react";
import { FC } from "react";
import Navbar from "../Navbar";

interface IStatisTemplate {
    children?: any
}
const StaticTemplate: FC<IStatisTemplate> = ({ children }) => {
    return (
        <>
            <Navbar />
            {
                children
            }
        </>
    )
}
export default StaticTemplate