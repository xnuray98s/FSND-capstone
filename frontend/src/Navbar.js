import { Flex, Heading, VStack, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  HStack,
  IconButton,
  Link,
  MenuDivider,
  Spacer,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/menu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSmallScreen] = useMediaQuery("(max-width: 800px)");
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navContent = isSmallScreen ? (
    <React.Fragment>
      <Spacer />
      <Menu>
        <MenuButton
          as={Button}
          bgColor="teal"
          color="white"
          _hover={{ bg: "teal.700" }}
          _active={{ bg: "teal.700" }}
        >
          <FaBars />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Movies">
            <MenuItem>
              <Link href="/get-movies">All Movies</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/form-movies">Add Movie</Link>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Actors & Actresses">
            <MenuItem>
              <Link href="/get-actors">All Actors & Actresses</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/form-actors">Add Actor or Actress</Link>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          {isAuthenticated? (
            <MenuItem  onClick={() => logout({ returnTo: window.location.origin })}>Log out</MenuItem>
          ): (<MenuItem onClick={() => loginWithRedirect()}>Log in</MenuItem>)}
          <MenuItem onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
          </MenuItem>
        </MenuList>
      </Menu>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <HStack spacing="20px" ml="10">
        <Menu>
          <Link href="/">
            <MenuButton>Homepage</MenuButton>
          </Link>
        </Menu>
        <Menu>
          <MenuButton>Movies</MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem>
                <Link href="/get-movies">All Movies</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/form-movies">Add Movie</Link>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton>Actors & Actresses</MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem>
                <Link href="/get-actors">All Actors & Actresses</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/form-actors">Add Actor or Actress</Link>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </HStack>
      <Spacer />
      {isAuthenticated? (
      <Button mt={1} bgColor="teal.500" color="white" _hover={{ bg: "teal.700" }} onClick={() => logout({ returnTo: window.location.origin })}>
        Log out
      </Button>
      ): (<Button bgColor="teal.500" color="white" _hover={{ bg: "teal.700" }} onClick={() => loginWithRedirect()}>
        Log in
      </Button>)}
      <IconButton
        ml={8}
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        isRound="true"
        onClick={toggleColorMode}
      />
    </React.Fragment>
  );
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md">
          FSND Casting Agency
        </Heading>
        {navContent}
      </Flex>
    </VStack>
  );
};

export default Navbar;
