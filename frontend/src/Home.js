import {
  Box,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";

const Home = () => {
  const { colorMode } = useColorMode();
  const [isSmallScreen] = useMediaQuery("(max-width: 800px)");
  return (
    <Stack spacing="15%" ml="10" direction="row" h="2xl">
      <VStack mt="15%" align="flex-start" spacing="10%">
        <Heading as="h1" size="4xl">
          the best casting agent
        </Heading>
        <Text fontSize="2xl">we find the perfect cast for your movie</Text>
      </VStack>
      <Box>
        <Image
          boxSize="500px"
          mt={isSmallScreen ? "90%" : "40%"}
          objectFit="contain"
          src="panalight.png"
        ></Image>
      </Box>
    </Stack>
  );
};

export default Home;
