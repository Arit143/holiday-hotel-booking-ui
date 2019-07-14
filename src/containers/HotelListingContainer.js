import React, { memo } from 'react';

import Search from './../components/search';
import { PageContext } from './../context/PageContext';

import useStyles from '../styles/hotel-listings.styles';

const HotelListingContainer = (props) => {
    const { history } = props;
    const classes = useStyles();

    const pageValues = {
        redirect: (...args) => history.push(...args)
    }

    return (
        <PageContext.Provider value={pageValues}>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Search />
            </main>
        </PageContext.Provider>
    )
}

export default memo(HotelListingContainer);