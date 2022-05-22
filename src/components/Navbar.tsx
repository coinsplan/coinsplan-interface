import { Box, Button, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

const Navbar: FC = () => {
    const borderColor = useColorModeValue("gray.200", "gray.800")
    return (
        <Box border="1px solid" borderWidth="0 0 1px 0" borderColor={borderColor} position="sticky" top={0} zIndex={70}>
            <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center" minH="70px">   
                <Box>
                    <Heading size="md">Logo</Heading>
                </Box>
                <Box>
                    <Button colorScheme="main">Launch app</Button>
                </Box>
            </Container>
        </Box>
    )
}
export default Navbar