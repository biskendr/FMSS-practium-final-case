import {
  CardActionArea,
  CardMedia,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

export default function CardComponent({ image, name, title }) {
  return (
    <Card
      sx={{
        width: 270,
        height: 500,
      }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          sx={{
            height: 400,
          }}
          alt={name}
          image={image}
        />
        <CardContent>
          <Typography
            component='span'
            variant='h6'
            color='primary'
            sx={{
              color: 'black',
              position: 'relative',
              textDecoration: 'none',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {name ? name : title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
