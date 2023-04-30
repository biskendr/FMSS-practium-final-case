import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Container sx={{ pt: '2em' }}>
      <h2>
        Uh-oh! Looks like the dark side has taken over this page.
        <br /> Home page, use the force to find.
      </h2>
      <Button variant='contained' color='secondary' sx={{ p: '1em' }}>
        <Link
          to={'/'}
          style={{
            margin: '0 auto',
            color: 'secondary',
            textDecoration: 'none',
          }}
        >
          <Typography
            component='span'
            variant='subtitle2'
            color='primary'
            sx={{ textDecoration: 'none', color: 'black' }}
          >
            Go Back Home
          </Typography>
        </Link>
      </Button>
    </Container>
  );
};

export default Error;
