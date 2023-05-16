import { Grid, Title } from "@mantine/core";
import React from "react";
import { MovieCard } from "card";
import { useStore } from "store";

const PlaylistContent = () => {
  const { movies } = useStore();
  return (
    <>
      <Title>Viewing List</Title>
      <Grid
        sx={{
          gap: "1rem",
        }}
      >
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.title} showAddButton />
        ))}
      </Grid>
    </>
  );
};

export default PlaylistContent;
