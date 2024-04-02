"use client";

import { TextField, Box, Button } from "@mui/material";
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from "react-hook-form";

import { registerStyles } from "./styles";

type Inputs = {
  name: string;
  email: string;
};

export default function UserRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter(); 
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push(`/select-pokemon/${data.name}/${encodeURIComponent(data.email)}`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Box sx={registerStyles.formContainer}>
        <TextField
          label="Name"
          variant="outlined"
          {...register("name", { required: true })}
          helperText={errors.name ? "Name is required" : ""}
          error={Boolean(errors.name)}
          fullWidth
        />
        <TextField
          label="Email"
          variant="outlined"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          helperText={errors.email ? (errors.email.type === 'pattern' ? 'Invalid email format' : 'Email is required') : ""}
          error={Boolean(errors.name)}
          fullWidth
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Register
        </Button>
      </Box>
    </form>
  );
}
