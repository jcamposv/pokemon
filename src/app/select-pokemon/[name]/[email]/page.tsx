import { Box } from "@mui/material";
import Form from "@/app/select-pokemon/form/form";

interface Params {
  name: string;
  email: string;
}
interface SelectPokemonProps {
  params:Params;
}

export default function SelectPokemon({ params: { name, email } }: SelectPokemonProps) {
  const currentEmail = decodeURIComponent(email);

  return (
    <Box sx={{ minHeight: 'calc(100vh - 35px)',  marginBottom: '40px' }}>
      <h3> Welcome {name}! Your email is {currentEmail}</h3>
      <p>Please select a pokemon</p>
      <Form name={name} email={currentEmail} />
    </Box>
  );
}
