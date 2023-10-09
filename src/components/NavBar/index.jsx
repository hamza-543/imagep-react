import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { toImageMimeTypes } from '../../utils'; // get from backend rather than hard coded on frontend
import { ImageApi } from '../../services/Api';
import { downloadBlob } from '../../utils';
import { useEffect } from 'react';


const useStyles = makeStyles(() => ({
  appBar: {
    marginBottom: 14
  },
  formControl: {
    minWidth: '140px !important',
    marginTop: '6px !important',
  }
}));

const NavBar = ({selectedFiles, setSelectedFiles}) => {
  const fileName = 'Converted Files.zip'
  const classes = useStyles();

  const [toFormat, setToFormat] = useState('');

  const requestParams = (files, format = 'JPEG') => {
    const formData = new FormData();
    formData.append('format', format)
    files.forEach(file => {
      formData.append('images', file);
    });
    return formData;
  }

  const handleChange = (event) => {
    setToFormat(event.target.value);
  };

  const handleClick = () => {
      const params = requestParams([...selectedFiles], toFormat);
      ImageApi.convert(params)
      .then((response) => {
        setSelectedFiles([]);
        setToFormat('');
        downloadBlob(response.data, fileName)
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  const myPages = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Processing',
      url: '/image_process'
    },
  ];

  return (
    <AppBar className={classes.appBar} position='sticky'>
      <Toolbar>
        <StoreIcon></StoreIcon>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 200,
              fontFamily:'roboto',
              color:'white',
              letterSpacing: '.2rem',
              textDecoration: 'none',
            }}
          >
            Image Doctor
          </Typography>
          <Box sx={{ flexWrap: 'wrap', flexGrow: 1, display: 'flex' }}>
            {myPages.map((pageData) => (
              <Button
                component={Link}
                to={pageData.url}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pageData.name}
              </Button>
            ))}
            <FormControl className={classes.formControl}>
              <InputLabel id="dropdown-label">Convert To</InputLabel>
              <Select
                labelId="dropdown-label"
                id="image-format-dropdown"
                value={toFormat}
                onChange={handleChange}
              >
                {toImageMimeTypes.map((mime) => (
                  <MenuItem value={mime.name}>{mime.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {toFormat && selectedFiles.length > 0 && <Button
              component={Link}
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={handleClick}
            >
              Convert
            </Button>
            }
          </Box>

      </Toolbar>
    </AppBar>
  );
}
export default NavBar;