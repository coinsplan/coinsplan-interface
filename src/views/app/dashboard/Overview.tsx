import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import PrebuildStat from "../../../components/PrebuildStat";

const Overview: FC = () => {
    return (
        <>
            <Heading fontSize={{
                sm: "22px",
                md: "28px"
            }}>Account overview</Heading>
            <Text mt="50px" mb="20px" size="sm">From your last 13 transactions</Text>
            <Box className="row">
                <Box className="col my-2">
                <PrebuildStat withBg title="Pending" value={3} total={13} color="#26ffff" size={{sm: "70px", md: "120px", lg: "100%"}} fontSize={{sm: "24px", md: "40px"}}/>
                </Box>
                <Box className="col my-2">
                <PrebuildStat withBg title="Done" value={9} total={13} color="#b1f013" size={{sm: "70px", md: "120px", lg: "100%"}} fontSize={{sm: "24px", md: "40px"}} />
                </Box>
                <Box className="col my-2">
                <PrebuildStat withBg title="Failed" value={1} total={13} color="#ed092f" size={{sm: "70px", md: "120px", lg: "100%"}} fontSize={{sm: "24px", md: "40px"}}/>
                </Box>
                
                
                
            </Box>
        </>
    )
}
export default Overview