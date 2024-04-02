import Image from "next/image";
import { Box } from "@mui/material";

import UserRegisterForm from "@/app/user-register-form";

import { registerStyles } from "./styles";

export default function Home() {
  return (
    <Box sx={registerStyles.container}>
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={120}
        style={registerStyles.logo}
      />
      <UserRegisterForm />
    </Box>
  );
}
