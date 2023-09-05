import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { imageMimeTypes } from '../../utils';

const useStyles = makeStyles(() => ({
  appBar: {
    marginBottom: 14
  },
  inputLabel: {
    // height: 50,
  },
  formControl: {
    minWidth: '140px !important',
    marginTop: '6px !important',
  }
}));

const NavBar = () => {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
              <InputLabel id="dropdown-label" className={classes.inputLabel}>Convert To</InputLabel>
              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={selectedValue}
                onChange={handleChange}
              >
                {imageMimeTypes.map((mime) => (
                  <MenuItem value={mime.mType}>{mime.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

      </Toolbar>
    </AppBar>
  );
}
export default NavBar;