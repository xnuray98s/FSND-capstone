import { Box, Stack, ButtonGroup, IconButton } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: "4", md: "8" }}
    >
      <Stack>
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
        >
          <Text fontSize="lg">Nourah Almutairi</Text>
          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="20px" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm">&copy; 2021 MiSK & Udacity. Capstone project.</Text>
      </Stack>
    </Box>
  );
};

export default Footer;
