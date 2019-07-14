import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH } from '../../constants/app.constants';

const useStyles = makeStyles(theme =>({
    drawer: {
        [theme.breakpoints.up('sm')]: {
          width: DRAWER_WIDTH,
          flexShrink: 0,
        },
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
    }
}));

const LeftPane = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <nav className={classes.drawer} aria-label="Mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    //open={mobileOpen}
                    //onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {/* children */}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {/* children */}
                </Drawer>
            </Hidden>
        </nav>
    );
};

export default LeftPane;