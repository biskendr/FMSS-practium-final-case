import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function BoxList({ array, redirect }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <Typography variant='subtitle1'>{redirect}:</Typography>
      {array.map((item, index) => {
        const id = item.split('/').slice(-2, -1)[0];
        return (
          <Link
            key={index}
            to={`/${redirect.toLowerCase()}/${id}`}
            style={{ textDecoration: 'inherit' }}
          >
            <Typography variant='subtitle1' color='secondary' px='1em'>
              {redirect} - {id}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
}

export default BoxList;
