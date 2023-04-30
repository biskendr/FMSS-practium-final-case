import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from './routes/Layout';
import DirectoryLayout from './routes/DirectoryLayout';
import DirectoryRoote from './routes/DirectoryRoute';
import Error from './routes/Error';
import Homepage from './components/Homepage';

import PeopleDetail from './components/StarWarsApp/People';
import PlanetDetail from './components/StarWarsApp/Planets';
import FilmDetail from './components/StarWarsApp/Films';
import SpeceDetail from './components/StarWarsApp/Species';
import VehicleDetail from './components/StarWarsApp/Vehicles';
import StarshipDetail from './components/StarWarsApp/Starships';

function App() {
  // Define object contain the components for each route
  const RouteComponents = {
    people: [<PeopleDetail />],
    planets: [<PlanetDetail />],
    films: [<FilmDetail />],
    species: [<SpeceDetail />],
    vehicles: [<VehicleDetail />],
    starships: [<StarshipDetail />],
  };
  // Map over the keys in the RouteComponents object to create a route for each one
  const routes = Object.keys(RouteComponents).map((key) => (
    <Route key={key} path={`/${key}`} element={<DirectoryLayout />}>
      <Route index element={<DirectoryRoote />} />
      <Route
        path={':id'}
        element={RouteComponents[key][0]}
        errorElement={<Error />}
      />
    </Route>
  ));
  // Create the router using createBrowserRouter and createRoutesFromElements
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        {routes}
        <Route path={'*'} element={<Error />} />
      </Route>
    )
  );
  // Render the router using the RouterProvider component
  return <RouterProvider router={router} />;
}

export default App;
