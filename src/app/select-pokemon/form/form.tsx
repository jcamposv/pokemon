"use client";

import { useSearchParams } from "next/navigation";
import { Box , CircularProgress } from "@mui/material";
import PokemonList from "../pokemon-list/pokemon-list";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";

interface FormProps {
  name: string;
  email: string;
}

type Inputs = {
  name: string;
  email: string;
  id: number;
  pokemonName: string;
  pokemonImage: string;
};

export default function Form({ name, email }: FormProps) {
    const {
        register,
        handleSubmit,
        setValue
      } = useForm<Inputs>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentUrl = `/select-pokemon/${name}/${email}`;
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page") as string)
    : 1;

  const onSubmit = async (data: any) => {
    await savePokemon(data.name, data.email, data.pokemonName)
    router.push(`/selected-pokemon/${data.pokemonName}`);
  }  

  const savePokemon = async (name: string, email: string, pokemonName: string) => {
    await fetch('/api/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, pokemonName }),
    })
  }

  const onSelect = (name: string, image: string, id: number) => {
    setValue("pokemonName", name);
    setValue("pokemonImage", image);
    setValue("id", id);
    handleSubmit(onSubmit)();
  }  
  return (
    <Box>
        <input hidden {...register("name")} value={name}  />
        <input hidden {...register("email")} value={email} />
      <PokemonList page={page} currentUrl={currentUrl} onSelect={onSelect} />
    </Box>
  );
}
