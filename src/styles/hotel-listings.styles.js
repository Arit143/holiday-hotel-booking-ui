import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  textField: {
      width: '100%'
  },
  searchButton: {
    display: 'flex',
    'align-items': 'flex-end'
  },
  listingCard: {
    maxWidth: '100%',
  },
  listingMedia: {
    height: 400,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    fontSize: 20,
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
}));

export default useStyles;