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
            <Box py="8vh">
            {
                children
            }
            </Box>
        </>
    )
}
export default StaticTemplate