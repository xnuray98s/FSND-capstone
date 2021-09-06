import {
  Box,
  Text,
  Badge,
  SimpleGrid,
  Heading,
  Divider,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { StarIcon } from "@chakra-ui/icons";
import { background, position } from "@chakra-ui/styled-system";
import React from "react";
import { Collapse } from "@chakra-ui/transition";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";

const MoviesList = (props) => {
  const movie = props.movie;
  const [show, setShow] = useState(false);
  const color = useColorModeValue("gray.600", "gray.400");
  const bgColor = useColorModeValue("gray.100", "gray.700");
  function handleToggle() {
    setShow(!show);
  }
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      key={movie.id}
      bgColor={bgColor}
    >
      <div
        className="background"
        style={{
          backgroundImage: `url(${movie.image})`,
          backgroundSize: "cover",
          height: "300px",
        }}
      ></div>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {movie.rating}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {movie.genres} | {movie.release}
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {movie.title}
        </Box>
        <Box>
          <Box as="span" color={color} fontSize="sm">
            Cast: {movie.cast}
          </Box>
          <Collapse startingHeight={25} in={show}>
            {movie.plot}
          </Collapse>
          <Button
            size="sm"
            colorScheme="teal"
            variant="link"
            onClick={handleToggle}
          >
            read {show ? "less" : "more"}
          </Button>
        </Box>
        <Box position="relative" d="flex" mt={2}>
          <StarIcon key={1} mt={0.5} color="teal.500" />

          <Box as="span" ml="2" color={color} fontSize="sm">
            {movie.imdb}/10
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MoviesList;
