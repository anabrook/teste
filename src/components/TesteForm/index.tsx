import { Movie } from "@/types/Movie";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

// import { Container } from './styles';

export default function TesteForm() {
  const [name, setName] = useState("");
  const [typeMovie, setTypeMovie] = useState("");

  const addMovie = () => {
    setMovies((e): Movie[] => {
      return [
        ...e,
        {
          name,
          typeMovie,
        },
      ];
    });
  };

  const [movies, setMovies] = useState<Movie[]>([
    {
      name: "Star Wars",
      typeMovie: "Ficção Cientifica",
    },
    {
      name: "The Simpsons",
      typeMovie: "Comédia",
    },
  ]);
  return (
    <Flex
      px={40}
      py={20}
      flexDirection="row"
      justifyContent={"center"}
      justifyItems={"center"}
    >
      <Flex flex={1} pt={20} flexDir={"column"} gap={10}>
        <Heading>Adicionar Filmes</Heading>
        {/* form */}
        <FormControl>
          <FormLabel>Nome de filme</FormLabel>
          <Input
            type="text"
            placeholder="Escreva o nome do filme"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <FormLabel pt={4}> Tipo do filme</FormLabel>
          <Input
            type="text"
            placeholder="Escreva o genero do filme"
            onChange={(e) => setTypeMovie(e.target.value)}
            value={typeMovie}
          />
        </FormControl>
        <Box justifyContent={"center"} display={"flex"}>
          {/* botao */}
          <Button
            w={"80%"}
            type="submit"
            colorScheme="blue"
            size="lg"
            onClick={addMovie}
          >
            Salvar
          </Button>
        </Box>
      </Flex>
      <Flex flex={1} pt={20} flexDir={"column"} gap={10} ml={40}>
        {/* lista do map */}
        <Heading>Listas de Filmes </Heading>
        {movies.map((movie, index) => (
          <Box key={index}>
            <Text>{movie.name}</Text>
            <Text>{movie.typeMovie}</Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
