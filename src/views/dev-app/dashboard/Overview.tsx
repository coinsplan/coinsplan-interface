import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import PrebuildStat from "../../../components/PrebuildStat";

const Overview: FC = () => {
    return (
        <>
            <Heading>Account overview</Heading>
            <Heading mt="50px" mb="20px" size="md">From your last 13 transactions</Heading>
            <Box className="row">
                <Box className="col-sm my-2">
                <PrebuildStat withBg title="Pending" value={3} total={13} color="#63c6ff"/>
                </Box>
                <Box className="col-sm my-2">
                <PrebuildStat withBg title="Done" value={9} total={13} color="#00ff73"/>
                </Box>
                <Box className="col-sm my-2">
                <PrebuildStat withBg title="Failed" value={1} total={13} color="#ed092f"/>
                </Box>
                
                
                
            </Box>
        </>
    )
}
export default Overview