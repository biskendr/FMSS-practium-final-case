import { styled } from '@mui/material/styles';
import { Box, ButtonBase, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import navigations from '../../json/homeNav.json';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 870,
  [theme.breakpoints.down('sm')]: {
    minWidth: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.1,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid white',
      color: 'primary',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.background.default,
  opacity: 1,
  transition: theme.transitions.create('opacity'),
}));

export default function Homepage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: '99vw',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      {navigations.map(({ title, width, url }) => (
        <ImageButton
          focusRipple
          key={title}
          style={{
            width: width,
          }}
        >
          <Link
            to={`${title}`}
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <ImageSrc style={{ backgroundImage: `url(${url})` }} />
            <ImageBackdrop className='MuiImageBackdrop-root' />
            <Typography
              component='span'
              variant='h6'
              sx={{
                color: 'white',
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {title.toLocaleUpperCase()}
            </Typography>
          </Link>
        </ImageButton>
      ))}
    </Box>
  );
}
