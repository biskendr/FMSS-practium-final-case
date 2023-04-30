import { Link, useLocation } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import useSwapiData from '../../../hooks/useFetcher';
import { getEndpointUrl } from '../../../services/Swapi';
import Error from '../../../routes/Error';
import Spinner from '../../Spinner';
import BoxList from '../../Box';
import images from '../../../json/images.json';

function PeopleDetail() {
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
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
      films,
      species,
      vehicles,
      starships,
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
              src={
                image.length !== 0
                  ? image[0].img
                  : 'https://cdn.europosters.eu/image/750/posters/star-wars-the-mandalorian-dark-i81807.jpg'
              }
              alt='detail image'
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
        <Typography variant='h6'>Height: {height / 100} meters</Typography>
        <Typography variant='h6'>Mass: {mass} kilograms</Typography>
        <Typography variant='h6'>Gender: {gender}</Typography>
        <Typography variant='h6'>Hair color: {hair_color}</Typography>
        <Typography variant='h6'>Skin color: {skin_color}</Typography>
        <Typography variant='h6'>Eye color: {eye_color}</Typography>
        <Typography variant='h6'>Birth year: {birth_year}</Typography>
        {!films.length < 1 && <BoxList array={films} redirect={'Films'} />}
        {!species.length < 1 && (
          <BoxList array={species} redirect={'Species'} />
        )}
        {!vehicles.length < 1 && (
          <BoxList array={vehicles} redirect={'Vehicles'} />
        )}
        {!starships.length < 1 && (
          <BoxList array={starships} redirect={'Starships'} />
        )}
      </>
    );
  }

  return <>{content}</>;
}

export default PeopleDetail;
