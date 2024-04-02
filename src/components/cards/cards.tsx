import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@/components/card/card";

interface MediaCardsProps {
    items: any[];
    onSelect: (name: string, image: string, id: number) => void;
    
}

export default function MediaCards({ items, onSelect }: MediaCardsProps) {
  console.log(items, 'console')
  return (
    <Grid container spacing={4}>
      {items.map((item: any, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
            id={item.id}
            name={item.name}
            image={item.url}
            onSelect={onSelect}
            />
        </Grid>
      ))}
    </Grid>
  );
}
