import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  outerContainer: {
    height:'85vh',
    overflowY: 'auto',
    overflow: 'hidden',
  },

  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));