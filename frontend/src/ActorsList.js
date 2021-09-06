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

const ActorsList = (props) => {
  const actor = props.actor;
  const color = useColorModeValue("gray.600", "gray.400");
  const bgColor = useColorModeValue("gray.100", "gray.700");
  let dateObj = new Date();
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      key={actor.id}
      bgColor={bgColor}
    >
      <div
        className="background"
        style={{
          backgroundImage: `url(${actor.image})`,
          backgroundSize: "cover",
          height: "300px",
        }}
      ></div>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {actor.type}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {actor.nationality}
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {actor.name}
        </Box>
        <Box>
          <Box as="span" color={color} fontSize="sm">
            {dateObj.getFullYear() - actor.dob} years old
          </Box>
          <Box>Movie: {actor.movie}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ActorsList;
