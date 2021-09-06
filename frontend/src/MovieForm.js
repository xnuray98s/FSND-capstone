import { useForm } from "react-hook-form";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Stack,
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useState, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S3 from "react-aws-s3";
const Form = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [movie, setMovie] = useState({
    title: "",
    image: "",
    cast: "",
    plot: "",
    genres: "",
    rating: "",
    imdb: "",
    release: "",
  });
  const imageInput = useRef();
  const { handleSubmit } = useForm();
  const onSubmit = (e) => {
    let image = imageInput.current.files[0];
    let imageName = imageInput.current.files[0].name;
    setMovie(movie);
    const config = {
      bucketName: process.env.REACT_APP_BUCKET_NAME,
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESS_ID,
      secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
    };
    const ReatS3Client = new S3(config);
    ReatS3Client.uploadFile(image, imageName).then((d) => {
      if (d.status === 204) {
        movie.image = d.location;
        console.log("success");
      } else {
        console.log("fail");
      }
    });
    let data = JSON.stringify({
      title: movie.title,
      image: movie.image,
      cast: movie.cast,
      plot: movie.plot,
      genres: movie.genres,
      rating: movie.rating,
      imdb: movie.imdb,
      release: movie.release,
    });
    console.log(data);
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "capstone",
          scope: "post:movies",
        });
        const response = await fetch("/movies", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: data,
        });
      } catch (e) {
        console.error(e);
      }
    })();
  };
  const handleChange = (e) => {
    movie[e.target.id] = e.target.value;
  };
  const color = useColorModeValue("gray.100", "gray.700");
  const [isLargeScreen] = useMediaQuery("(min-width: 600px)");
  return isLargeScreen ? (
    <Flex height="2xl" alignItems="center" justifyContent="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={4} p={12} rounded={6}>
          <Box
            bgColor={color}
            p={8}
            maxWidth="4xl"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
          >
            <Heading size="lg">Add movie</Heading>
            <HStack>
              <VStack>
                <FormControl id="title" name="title" isRequired>
                  <FormLabel>Title</FormLabel>
                  <Input
                    placeholder="Movie's title"
                    focusBorderColor="teal.500"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="cast">
                  <FormLabel>Cast</FormLabel>
                  <Input
                    placeholder="E.g.: Brad Pitt, Will Smith.."
                    size="md"
                    w="20rem"
                    focusBorderColor="teal.500"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="genres">
                  <FormLabel>Genres</FormLabel>
                  <Input
                    placeholder="E.g.:
                  Action, Fantasy..."
                    size="md"
                    focusBorderColor="teal.500"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="image">
                  <FormLabel>Image</FormLabel>
                  <Input
                    type="file"
                    size="md"
                    focusBorderColor="teal.500"
                    onChange={handleChange}
                    ref={imageInput}
                  />
                </FormControl>
              </VStack>
              <VStack>
                <FormControl id="release">
                  <FormLabel>Release date</FormLabel>
                  <Input
                    placeholder="Year"
                    size="md"
                    focusBorderColor="teal.500"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl id="rating">
                  <FormLabel>Rating</FormLabel>
                  <Input
                    placeholder="E.g.: PG-13.."
                    size="md"
                    focusBorderColor="teal.500"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="imdb">
                  <FormLabel>IMDb Rating</FormLabel>
                  <Input
                    placeholder="E.g.: 7.8"
                    size="md"
                    focusBorderColor="teal.500"
                    onChange={handleChange}
                  />
                </FormControl>
              </VStack>
            </HStack>

            <FormControl id="plot">
              <FormLabel>Plot</FormLabel>
              <Textarea
                placeholder="Movie's plot"
                size="md"
                focusBorderColor="teal.500"
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Flex>
  ) : (
    <Flex height="xl" alignItems="center" justifyContent="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          bgColor={color}
          p={3}
          maxWidth="4xl"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Stack direction="column" spacing={2}>
            <Heading size="lg">Add movie</Heading>

            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Movie's title"
                focusBorderColor="teal.500"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="cast">
              <FormLabel>Cast</FormLabel>
              <Input
                placeholder="E.g.: Brad Pitt, Will Smith.."
                size="md"
                w="20rem"
                focusBorderColor="teal.500"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="genres">
              <FormLabel>Genres</FormLabel>
              <Input
                placeholder="E.g.:
                  Action, Fantasy..."
                size="md"
                focusBorderColor="teal.500"
                onChange={handleChange}
              />
            </FormControl>
            <HStack>
              <FormControl id="release">
                <FormLabel>Release date</FormLabel>
                <Input
                  placeholder="Year"
                  size="md"
                  focusBorderColor="teal.500"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl id="rating">
                <FormLabel>Rating</FormLabel>
                <Input
                  placeholder="E.g.: PG-13.."
                  size="md"
                  focusBorderColor="teal.500"
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>
            <FormControl id="imdb">
              <FormLabel>IMDb Rating</FormLabel>
              <Input
                placeholder="E.g.: 7.8"
                size="md"
                focusBorderColor="teal.500"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="plot">
              <FormLabel>Plot</FormLabel>
              <Textarea
                placeholder="Movie's plot"
                size="md"
                focusBorderColor="teal.500"
                onChange={handleChange}
              />
            </FormControl>
          </Stack>
        </Box>
      </form>
    </Flex>
  );
};

export default Form;
