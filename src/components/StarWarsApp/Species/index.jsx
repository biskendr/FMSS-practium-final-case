import { Link, useLocation } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import useSwapiData from '../../../hooks/useFetcher';
import { getEndpointUrl } from '../../../services/Swapi';
import Error from '../../../routes/Error';
import Spinner from '../../Spinner';
import BoxList from '../../Box';
import images from '../../../json/images.json';

function SpeceDetail() {
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
      designation,
      average_lifespan,
      classification,
      people,
      films,
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
        <Typography variant='h6'>Classification: {classification}</Typography>
        <Typography variant='h6'>Designation: {designation}</Typography>
        <Typography variant='h6'>
          Average Lifespan: {average_lifespan} years
        </Typography>
        {!people.length < 1 && <BoxList array={people} redirect={'People'} />}
        {!films.length < 1 && <BoxList array={films} redirect={'Films'} />}
      </>
    );
  }
  return <>{content}</>;
}

export default SpeceDetail;
