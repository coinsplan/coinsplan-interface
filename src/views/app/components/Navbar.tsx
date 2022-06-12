import { Box, Button, Container, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import CustomConnectButton from "../../../components/ConnectButton";

const Navbar: FC = () => {
    return (
        <Box position="fixed" top={0} left={0} right={0} zIndex={70} bg="#d9e5ff10" h="60px" px="20px" backdropFilter="blur(4px)" border="1px solid" borderColor="#ffffff20" borderWidth="1px 0 0 0">
            <Flex justifyContent="space-between" alignItems="center" minH="40px" py="10px">   
                <Box>
                    <Image alt="coinsplan-logo" h="40px" rounded={8} src="https://raw.githubusercontent.com/coinsplan/resources/524064751792fee7d493a0313bba5ceec40767e9/logos/icon.svg"></Image>
                </Box>
                <Box>
                    <CustomConnectButton height="40px"/>
                </Box>
            </Flex>
        </Box>
    )
}
export default Navbar