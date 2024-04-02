"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


import { fetchPokemonByName } from '@/services/pokeApiService';

interface SelectedPokemonProps {
  params: {
    name: string;
  };
}


export default function SelectedPokemon({ params: { name } }: SelectedPokemonProps) {
  const [pokemon, setPokemon] = useState<any>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const result = await fetchPokemonByName(name);
      setPokemon(result);
    }
    getPokemon();
  }, [name]);


  return (
    <Box sx={{ minHeight: 'calc(100vh - 35px)',  marginBottom: '40px' }}>
      <h2> Selected Pokemon</h2>
      <Card sx={{ maxWidth: 500, margin: '0 auto' }}>
      <CardMedia
        sx={{ height: 440 }}
        image={pokemon.sprites?.other?.dream_world?.front_default}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Experience: {pokemon.base_experience}
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}
