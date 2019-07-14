import React, { memo, useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import { PageContext } from '../../context/PageContext';

import useStyles from '../../styles/hotel-listings.styles';

const Search = () => {
    const [state, setState] = useState({ location: '' });
    const classes = useStyles();
    const { redirect } = useContext(PageContext);

    const handleChange = (e) => {
        setState({ ...state, location: e.target.value });
    }

    const onSearch = () => {
        redirect({
            path: '/',
            search: `?searchTerm=${state.location}`
        })
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={9}>
                <TextField
                    id="location-name"
                    label="Location"
                    className={classes.textField}
                    value={state.location}
                    onChange={handleChange}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={3} className={classes.searchButton}>
                <Button variant="contained" color="primary" onClick={onSearch}>
                    Search
                </Button>
            </Grid>
        </Grid>
    );
}

export default memo(Search);