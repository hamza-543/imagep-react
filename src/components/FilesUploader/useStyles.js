import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
        padding: theme.spacing(2),
  },
  uploadButton: {
    color: 'blue', // Add the 'color: blue' style here
  },
  uploadDiv: {
    display: 'flex', // Add the display properties here
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  fileUploadContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Make the container take the full viewport height
  },
  fileUploadContainer1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100, /* Adjust the width and height as needed */
    height: 100,
    borderRadius: '50%', /* Makes it circular */
    backgroundColor: '#e3e3e3', /* Dark background color */
    color: '#000', /* Light text color for contrast */
    marginTop: 40,

  },
  uploadContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  fileInput: {
    display: 'none'
  },
  uploadText: {
    margin: '0 0 0 10px',
    fontSize: 'large'
  },
  uploadText1: {
    display: 'none'
  }
}));
