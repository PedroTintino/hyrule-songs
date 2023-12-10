import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard( { name, image, location } ) {
  return (
    <Card sx={{ maxWidth: 200, marginTop: '1em' }}>
      <CardActionArea>
        <CardMedia
            component="img"
            height="100"
            image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight='bold'>
          Location: {location}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}