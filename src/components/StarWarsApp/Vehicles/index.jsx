import { Link, useLocation } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import useSwapiData from '../../../hooks/useFetcher';
import { getEndpointUrl } from '../../../services/Swapi';
import Spinner from '../../Spinner';
import Error from '../../../routes/Error';
import images from '../../../json/images.json';

function VehicleDetail() {
  const { pathname } = useLocation();
  let url = getEndpointUrl(pathname);
  const { response, loading, error } = useSwapiData(url);
  let image;
  if (response) {
    image = images.filter((filter) => filter.name === response.name);
  }
  let content;

  if (loading) content = <Spinner />;
  if (error) content = <Error />;

  if (response) {
    const {
      name,
      model,
      manufacturer,
      length,
      max_atmosphering_speed,
      crew,
      passengers,
      cargo_capacity,
      vehicle_class,
    } = response;
    content = (
      <>
        <Link to={'..'} style={{ textDecoration: 'inherit' }}>
          <Typography variant='subtitle2' color='secondary' component='span'>
            {`<-`}Go Back
          </Typography>
        </Link>
        <Typography
          variant='h2'
          align='center'
          component='h1'
          color='text.secondary'
          bgcolor='background.secondary'
          sx={{
            m: '1em auto',
            px: '1em',
            borderRadius: '15px',
            width: 'max-content',
          }}
        >
          {name}
        </Typography>
        {response && (
          <Grid sx={{ maxWidth: '1280' }}>
            <img
              src={image[0].img}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
        )}
        <Typography
          variant='h4'
          color='secondary'
          sx={{ textDecoration: 'underline' }}
        >
          Details
        </Typography>
        <Typography variant='h6'>Manufacturer: {manufacturer}</Typography>
        <Typography variant='h6'>Model: {model}</Typography>
        <Typography variant='h6'>Vehicle class: {vehicle_class}</Typography>
        <Typography
          variant='h4'
          color='secondary'
          sx={{ textDecoration: 'underline' }}
        >
          Technical specifications
        </Typography>
        <Typography variant='h6'>Length: {length} meters</Typography>
        <Typography variant='h6'>
          Maximum atmospheric speed: {max_atmosphering_speed} kph
        </Typography>
        <Typography variant='h6'>Cargo capacity: {cargo_capacity}</Typography>
        <Typography variant='h6'>Crew: {crew} crew</Typography>
        <Typography variant='h6'>Passengers: {passengers}</Typography>
      </>
    );
  }

  return <>{content}</>;
}

export default VehicleDetail;
