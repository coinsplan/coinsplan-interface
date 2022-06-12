import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

const CustomDateTimePicker: FC = () => {
  return (
    <Flex bg="#ffffff10" rounded={18} h="70px" w="full">
      <input type="datetime-local" className="scheduler-datetime-picker darkmode-calendar"/>
    </Flex>
  )
}
export default CustomDateTimePicker