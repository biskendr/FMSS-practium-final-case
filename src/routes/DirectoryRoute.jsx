import React, { useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

import Spinner from '../components/Spinner';
import CardComponent from '../components/Card';
import { getEndpointUrl } from '../services/Swapi';
import useSwapiData from '../hooks/useFetcher';
import images from '../json/images.json';
import navbarIcons from '../json/navbarIcons.json';

function DirectoryRoute() {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];
  let url = getEndpointUrl(path);
  const { response, setResponse, data, setData, loading, error } =
    useSwapiData(url);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(getEndpointUrl(path + '/?search=' + input)).then((res) => {
      setResponse(res.data);
      setData(res.data.results);
    });
  };

  if (loading) return <Spinner />;
  if (error) return <Error />;

  const handleLoadMore = () => {
    try {
      setIsLoading(true);
      setTimeout(() => {
        if (response.next) {
          axios.get(response.next).then((res) => {
            setResponse(res.data);
            res.data.results.map((item) => {
              setData((prev) => [...prev, item]);
            });
          });
        }
        setIsLoading(false);
      }, 1000);
    } catch (error) {}
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={navbarIcons[0]['search']}
          alt='search icon'
          width={55}
          style={{ padding: '0 1em' }}
        />
        <TextField
          id='outlined-basic'
          label={`Search ${path}`}
          variant='outlined'
          type='text'
          name='search'
          color='secondary'
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1em',
          justifyContent: 'flex-start',
        }}
      >
        {data &&
          data.map((item, index) => {
            const { name, url } = item;
            const id = url.split('/').slice(-2, -1)[0];
            const filteredImages = images.filter((filter) =>
              name ? filter.name === name : filter.name === item.title
            );
            return (
              <Link
                key={index}
                to={`${id}`}
                style={{
                  paddingTop: '2em',
                  margin: '0 auto',
                  color: 'secondary',
                  textDecoration: 'inherit',
                }}
              >
                <CardComponent
                  image={
                    filteredImages.length > 0
                      ? filteredImages[0].img
                      : 'https://cdn.europosters.eu/image/750/posters/star-wars-the-mandalorian-dark-i81807.jpg'
                  }
                  name={name}
                  title={item.title}
                />
              </Link>
            );
          })}
        {data && data.length === 0 && (
          <h2 style={{ color: 'white' }}>
            Sorry, the droids couldn't find any matches.
          </h2>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2em 0',
        }}
      >
        {response.next &&
          (isLoading ? (
            <Spinner variant='contained' />
          ) : (
            <Button variant='contained' onClick={handleLoadMore}>
              <Typography
                component='span'
                variant='subtitle2'
                bgcolor='background.secondary'
                sx={{
                  textDecoration: 'none',
                  p: '1em',
                  borderRadius: '15px',
                }}
              >
                Load More
              </Typography>
            </Button>
          ))}
      </div>
    </div>
  );
}

export default DirectoryRoute;
