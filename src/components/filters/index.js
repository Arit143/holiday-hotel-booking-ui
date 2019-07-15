import React, { Fragment } from 'react';

import PriceFilter from './PriceFilter';
import BedroomFilter from './BedroomFilter';


const Filters = (props) => {
    return (
        <Fragment>
            <PriceFilter />
            <BedroomFilter />
        </Fragment>
    );
};

export default Filters;