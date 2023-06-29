import { Users } from "@/types/Users";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function RegisterUsers() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [telefone, setTelefone] = useState("");

  const addUsers = () => {
    setUsers((e): Users[] => {
      return [
        ...e,
        {
          nome,
          email,
          endereco: { rua: endereco, numero, bairro },
          telefone,
        },
      ];
    });
  };

  const [users, setUsers] = useState<Users[]>([
    {
      nome: "João",
      email: "teste@teste.com.br",
      endereco: { rua: "Rua 1", numero: "2", bairro: "Bairro 1" },
      telefone: "217777",
    },
    {
      nome: "Maria",
      email: "teste@teste.com.br",
      endereco: { rua: "Rua 2", numero: "2", bairro: "Bairro 1" },
      telefone: "217777",
    },
    {
      nome: "Ana",
      email: "teste@teste.com.br",
      endereco: { rua: "Rua 3", numero: "2", bairro: "Bairro 1" },
      telefone: "217777",
    },
    {
      nome: "Enzo",
      email: "teste@teste.com.br",
      endereco: { rua: "Rua 4", numero: "1", bairro: "Bairro 1" },
      telefone: "217777",
    },
  ]);

  return (
    <Container>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        py={50}
        flexDir={"column"}
      >
        <Heading>Cadastro de Usuários</Heading>
      </Flex>
      <Flex flexDir="column">
        <Box>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input
              type="text"
              placeholder="Escreva o seu nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />

            <FormLabel pt={4}>E-mail</FormLabel>
            <Input
              type="email"
              placeholder="Escreva o seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <FormLabel pt={4} as={"title"}>
              Endereço
            </FormLabel>
            <FormLabel pt={4}>Rua</FormLabel>
            <Input
              type="text"
              placeholder="Escreva o nome da sua rua"
              onChange={(e) => setEndereco(e.target.value)}
              value={endereco}
            />
            <FormLabel pt={4}>Número</FormLabel>
            <Input
              type="number"
              placeholder="Escreva o número da sua rua"
              onChange={(e) => setNumero(e.target.value)}
              value={numero}
            />
            <FormLabel pt={4}>Bairro</FormLabel>
            <Input
              onChange={(e) => setBairro(e.target.value)}
              value={bairro}
              type="text"
              placeholder="Escreva o nome do seu bairro"
            />

            <FormLabel pt={4}>Telefone</FormLabel>
            <Input
              onChange={(e) => setTelefone(e.target.value)}
              value={telefone}
              type="number"
              placeholder="Escreva o seu número de telefone"
            />
            <Box mt={4} w={"full"} justifyContent={"center"} display={"flex"}>
              <Button
                bg={"red"}
                color={"white"}
                _hover={{
                  bg: "pink.600",
                }}
                onClick={addUsers}
              >
                Adicionar novo usuário
              </Button>
            </Box>
          </FormControl>
        </Box>
        <Box py={40}>
          <Heading>Resumo de Usuários</Heading>
          {users.map((users, index) => (
            <Box key={index}>
              <Text>{users.nome}</Text>
              <Text>{users.email}</Text>
              <Text>{users.endereco.rua}</Text>
              <Text>{users.endereco.numero}</Text>
              <Text>{users.endereco.bairro}</Text>
              <Text>{users.telefone}</Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </Container>
  );
}
