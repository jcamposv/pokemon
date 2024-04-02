import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MediaCardProps {
    name: string;
    image: string;
    id: number;
    onSelect: (name: string, image: string, id: number) => void;
    }

export default function MediaCard({ name, image, id, onSelect }: MediaCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardMedia
        sx={{ height: 300 }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onSelect(name, image, id)}>Select</Button>
      </CardActions>
    </Card>
  );
}