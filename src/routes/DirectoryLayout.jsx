import { Container, Typography } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';

export default function DirectoryLayout() {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];
  const capitalizedPath = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <Container>
      <main style={{ padding: '2em 0' }}>
        <Typography sx={{ fontSize: '48px' }}>{capitalizedPath}</Typography>
        <Outlet />
      </main>
    </Container>
  );
}
