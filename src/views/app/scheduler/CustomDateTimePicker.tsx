import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

const CustomDateTimePicker: FC = () => {
  const styles = {
    inputBg: useColorModeValue("gray.100", "gray.800"),
  }
  return (
    <Flex bg={styles.inputBg} rounded={18} h="70px" w="full">
      <input type="datetime-local" className="scheduler-datetime-picker lightmode-calendar"/>
    </Flex>
  )
}
export default CustomDateTimePicker