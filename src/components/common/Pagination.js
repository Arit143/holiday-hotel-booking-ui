import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme =>({ 
    root: {
        display: 'inline-flex'
    }
}));

const Pagination = (props) => {
    const { totalRecords, pageIndex, pageLimit, onPageChange } = props;
    const [state, setState] = useState({ pageIndex });
    const classes = useStyles();

    const statePageIndex = state.pageIndex;

    useEffect(() => {
        onPageChange(statePageIndex);
    }, [statePageIndex])

    const setPageIndex = (pageIndex) => {
        setState({ ...state, pageIndex });
    }

    const difference = (totalRecords - (statePageIndex * pageLimit));
    const currentPageRecords = ((statePageIndex + 1) * pageLimit);
    return (
        <div className={classes.root}>
            {statePageIndex > 0 && <ArrowLeft onClick={() => setPageIndex(statePageIndex - 1)}/>}
            <div>
                {`${(statePageIndex * pageLimit) + 1} - ${currentPageRecords > totalRecords ? totalRecords : currentPageRecords} of ${totalRecords} records`}
            </div>
            { (difference > pageLimit) && <ArrowRight onClick={() => setPageIndex(statePageIndex + 1)}/>}
        </div>
        
    );
}

export default Pagination;