import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { GetServerSidePropsContext, GetServerSideProps } from "next";
import Form from "@/app/select-pokemon/form/form";


interface SelectPokemonProps {
  params: {
    name: string;
    email: string;
  };
  page: number;
}

interface Pokemon {
  name: string;
  url: string;
}


export default function SelectPokemon({ params: { name, email }, page }: SelectPokemonProps) {
  const currentEmail = decodeURIComponent(email);

  return (
    <Box sx={{ minHeight: 'calc(100vh - 35px)',  marginBottom: '40px' }}>
      <h3> Welcome {name}! Your email is {currentEmail}</h3>
      <p>Please select a pokemon</p>
      <Form name={name} email={currentEmail} page={page} />
    </Box>
  );
}
