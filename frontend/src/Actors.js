import { Heading } from "@chakra-ui/react";

import actorsJSON from "./actorsJSON";
import { SimpleGrid, Divider } from "@chakra-ui/layout";
import ActorsList from "./ActorsList";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Actors = () => {
  const [actors, setActors] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "capstone",
          scope: "get:actors",
        });
        const response = await fetch("/api/actors", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setActors(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  if (!actors) {
    return <div>Loading...</div>;
  }

  return (
    <div className="actorsList">
      <Heading ml={10}>Actors & Actresses</Heading>
      <Divider></Divider>
      <SimpleGrid
        ml={10}
        mt={5}
        mr={10}
        spacing={10}
        minChildWidth="200px"
        columnGap="100px"
      >
        {actors.map((actor) => (
          <ActorsList actor={actor} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Actors;
