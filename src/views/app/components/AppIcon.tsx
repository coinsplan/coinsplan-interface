import {
  AspectRatio,
  Box,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface IAppIcon {
  name?: string;
  src?: string;
  path: string;
}

const AppIcon: FC<IAppIcon> = ({ name, src, path }) => {
  const router = useRouter()
  return (
    <VStack spacing={6}>
      <AspectRatio
        ratio={1 / 1}
        minW="130px"
        w="10vw"
        maxW="280px"
        _hover={{ transform: "scale(1.1)" }}
        transition="300ms ease"
        cursor="pointer"
        onClick={() => router.push(path)}
      >
        <Image
          alt="app-icon"
          src={src}
          boxShadow="0 10px 40px #00000020"
          borderRadius={40}
        />
      </AspectRatio>
      <Text textAlign="center" fontSize="14px" fontWeight={500} opacity={0.8}>
        {name}
      </Text>
    </VStack>
  );
};
export default AppIcon;
