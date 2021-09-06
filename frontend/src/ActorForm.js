import { useForm } from "react-hook-form";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useState, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S3 from "react-aws-s3";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Stack,
  Box,
  Flex,
  Heading,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const ActorForm = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [actor, setActor] = useState({
    name: "",
    image: "",
    dob: "",
    movie: "",
    nationality: "",
    gender: "",
  });
  const imageInput = useRef();
  const { handleSubmit } = useForm();
  const onSubmit = (e) => {
    let image = imageInput.current.files[0];
    let imageName = imageInput.current.files[0].name;
    setActor(actor);
    const config = {
      bucketName: process.env.REACT_APP_BUCKET_NAME,
      region: process.env.REACT_APP_REGION,
      accessKeyId: process.env.REACT_APP_ACCESS_ID,
      secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
    };
    const ReatS3Client = new S3(config);
    ReatS3Client.uploadFile(image, imageName).then((d) => {
      if (d.status === 204) {
        actor.image = d.location;
        console.log("success");
      } else {
        console.log("fail");
      }
    });
    let data = JSON.stringify({
      name: actor.name,
      image: actor.image,
      movie: actor.movie,
      dob: actor.dob,
      nationality: actor.nationality,
      gender: actor.gender,
    });
    console.log(data);
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "capstone",
          scope: "post:actors",
        });
        const response = await fetch("/actors", {
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
    if (e == "m" || e == "f") {
      actor.gender = e;
    } else {
      actor[e.target.id] = e.target.value;
    }
  };
  const color = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex height="2xl" alignItems="center" justifyContent="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          bgColor={color}
          p={8}
          maxWidth="4xl"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Stack direction="column" spacing={4} rounded={6}>
            <Heading size="lg">Add Actor & Actress</Heading>

            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="First and Last name"
                focusBorderColor="teal.500"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="dob">
              <FormLabel>Date Of Birth</FormLabel>
              <Input
                type="date"
                size="md"
                focusBorderColor="teal.500"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="movie">
              <FormLabel>Movie</FormLabel>
              <Input
                placeholder="Movie's Title"
                size="md"
                focusBorderColor="teal.500"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="nationality">
              <FormLabel>Nationality</FormLabel>
              <Input
                placeholder="E.g.: American.."
                size="md"
                focusBorderColor="teal.500"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="gender">
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                defaultValue="2"
                colorScheme="teal.500"
                onChange={handleChange}
              >
                <Stack spacing={5} direction="row">
                  <Radio value="m">Male</Radio>
                  <Radio value="f">Female</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl id="image">
              <FormLabel>Image</FormLabel>
              <Input
                type="file"
                size="md"
                focusBorderColor="teal.500"
                ref={imageInput}
              />
            </FormControl>
          </Stack>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Flex>
  );
};

export default ActorForm;
