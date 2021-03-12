import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  
  media: {
    backgroundBlendMode: 'darken',
    marginBottom: '8px',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderRadius: '15px',
    boxShadow: '0px 0px 20px rgba(122,122,122, 0.4)',

  },

  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    background: 'linear-gradient(to left top,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.6))',
    boxShadow: '6px 6px 20px rgba(122,122,122, 0.2)',
  },

  template: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    position: 'relative',
  },

  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  caption: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '16px 16px 0',
  },

  moment: {
    marginLeft: '16px',
    color: 'grey'
  },

  name: {
    padding: '0 16px',
    fontWeight: 'bold',
    maxWidth: '80%'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});