import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

const CustomDateTimePicker: FC = () => {
  return (
    <Flex bg="#0000000a" rounded={18} h="70px" w="full">
      <input type="datetime-local" className="scheduler-datetime-picker lightmode-calendar"/>
    </Flex>
  )
}
export default CustomDateTimePicker