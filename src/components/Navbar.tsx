import { Box, Button, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

const Navbar: FC = () => {
    return (
        <Box position="fixed" top={0} left={0} right={0} zIndex={70} bg="#ffffffc0" backdropFilter="blur(7px)">
            <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center" minH="70px">   
                <Box>
                    <Image h="60px" src="https://raw.githubusercontent.com/coinsplan/resources/524064751792fee7d493a0313bba5ceec40767e9/logos/icon-transparent-black.svg"></Image>
                </Box>
                <Box>
                    <Button colorScheme="mainNonDynamic">Launch app</Button>
                </Box>
            </Container>
        </Box>
    )
}
export default Navbar