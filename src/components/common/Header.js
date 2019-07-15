import React, { memo } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { onLanguageChange } from './../../actions/app.actions';
import { DRAWER_WIDTH } from '../../constants/app.constants';

const useStyles = makeStyles(theme =>({
    appBar: {
        marginLeft: DRAWER_WIDTH,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },
    appBarTitle: {
        display: 'flex',
        'align-items': 'center'
    },
    menu: {
        width: '100%'
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const { language, actions: { onLanguageChange } } = props;

    const handleLanguageChange = (e) => {
        onLanguageChange(e.target.value);
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    edge="start"
                    //onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Grid container>
                    <Grid item xs={7} className={classes.appBarTitle}>
                        <Typography variant="h6">
                            <FormattedMessage id="appBar.pageTitle" />
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                    <TextField
                        id="language-id"
                        select
                        value={language}
                        onChange={handleLanguageChange}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                    >
                        <option key={'en'} value={'en'}>
                            English
                        </option>
                        <option key={'de'} value={'de'}>
                            German
                        </option>
                    </TextField>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            onLanguageChange: (language) => dispatch(onLanguageChange(language))
        }
    }
}

export default connect(null, mapDispatchToProps)(memo(Header));