import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({
  paper: {
    padding: '15px',
    marginTop: '20px',
    background: 'linear-gradient(to left top,rgba(255, 255, 255, 0.8),rgba(255, 255, 255, 0.6))',
    boxShadow: '6px 6px 20px rgba(122,122,122, 0.2)',
    borderRadius: '15px',
  },
  
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  fileInput: {
    width: '100%',
    margin: '15px 0',
  },
  
  buttonSubmit: {
    marginBottom: "10",
    borderRadius: "5px",

    '&:hover': {
      boxShadow: '6px 6px 20px rgba(122,122,122, 0.3)',
    }

  }
}));