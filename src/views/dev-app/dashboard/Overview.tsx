import { Heading, HStack } from "@chakra-ui/react";
import { FC } from "react";
import PrebuildStat from "../../../components/PrebuildStat";

const Overview: FC = () => {
    return (
        <>
            <Heading>Account overview</Heading>
            <HStack spacing={10} my="50px">
                <PrebuildStat withBg title="Pending" value={3} total={13} color="#194bff"/>
                <PrebuildStat withBg title="Done" value={9} total={13} color="#00ff73"/>
                <PrebuildStat withBg title="Failed" value={1} total={13} color="#ed092f"/>
            </HStack>
        </>
    )
}
export default Overview