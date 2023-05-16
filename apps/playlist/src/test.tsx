import React from "react";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  Grid,
  useMantineTheme,
} from "@mantine/core";
import { useStore } from "store";

const movies = [
  {
    title: "Halo",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/eO0QV5qJaEngP1Ax9w3eV6bJG2f.jpg",
  },
  {
    title: "Doctor Strange",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
  },
  {
    title: "The Lost City",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
  },
  {
    title: "Shang-Chi",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
  },
  {
    title: "Turning Red",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
  },
  {
    title: "Encanto",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
  },
  {
    title: "Adam Project",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
  },
  {
    title: "Morbius",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
  },
];

const test = () => {
  const { addMovie } = useStore();
  const theme = useMantineTheme();

  return (
    <Grid
      sx={{
        gap: "1rem",
      }}
    >
      {movies.map((movie) => (
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Image src={movie.image} height={320} alt={movie.title} />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>{movie.title}</Text>
          </Group>

          {
            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
              onClick={() =>
                addMovie({ title: movie.title, image: movie.image })
              }
            >
              Add To List
            </Button>
          }
        </Card>
        //   <MovieCard {...movie} key={movie.title} showAddButton />
      ))}
    </Grid>
  );
};

export default test;
