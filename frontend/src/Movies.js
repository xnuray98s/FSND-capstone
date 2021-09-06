import { Heading } from "@chakra-ui/react";

import { SimpleGrid, Divider } from "@chakra-ui/layout";
import MoviesList from "./MoviesList";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Movies = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "capstone",
          scope: "get:movies",
        });
        const response = await fetch("/api/movies", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMovies(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  if (!movies) {
    return <div>Loading...</div>;
  }
  return (
    <div className="moviesList">
      <Heading ml={10}>Movies</Heading>
      <Divider></Divider>
      <SimpleGrid
        ml={10}
        mt={5}
        mr={10}
        spacing={10}
        minChildWidth="300px"
        columnGap="100px"
      >
        {movies.map((movie) => (
          <MoviesList movie={movie} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Movies;
