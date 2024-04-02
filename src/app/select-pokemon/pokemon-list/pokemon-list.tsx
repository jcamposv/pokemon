"use client";

import React, { FC, useEffect, useState } from 'react';
import { Pagination, Box } from '@mui/material';
import { useRouter } from 'next/navigation'
import { fetchPokemons } from '@/services/pokeApiService';
import Cards  from '@/components/cards/cards';
import { extractLastIdFromUrl } from '@/utils/index';

type Props = {
  page: number;
  currentUrl: string;
  onSelect: (name: string, image: string, id: number) => void;
};

const pathImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const PokemonList: FC<Props> = ({ page = 1, currentUrl, onSelect }) => {
  const [pokemons, setPokemons] = useState<any>([]);
  const router = useRouter();
  const limit = 20;
  const offset = (page - 1) * limit;

useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemons(limit, offset);
      const items = data.results.map((pokemon: any) => {
        const id = extractLastIdFromUrl(pokemon.url);
        return {
          ...pokemon,
          id,
          url: `${pathImage}${id}.png`
        }
      });
      setPokemons(items);
    };
    loadData();
  }, [page, limit, offset]);

    const onChangePage = (__event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`${currentUrl}?page=${value}`);
    };

  return (
    <Box>
        <h3 style={{ margin: '20px 0'}}>Pokémon List</h3>
        <Cards items={pokemons} onSelect={onSelect} />
        <Pagination count={limit} page={page} onChange={onChangePage}  sx={{ marginTop: 4 }}/>
    </Box>
  );
};

export default PokemonList;
