import { actionTypes } from './action-types';

export const onSearch = (searchTerm) => ({
    type: actionTypes.search.SEARCH_HOTELS,
    payload: searchTerm
})