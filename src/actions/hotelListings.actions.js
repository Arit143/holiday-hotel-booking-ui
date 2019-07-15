import { actionTypes } from './action-types';

export const onSearch = (searchTerm) => ({
    type: actionTypes.search.SEARCH_HOTELS,
    payload: searchTerm
});

export const onPageChange = (pageIndex) => ({
    type: actionTypes.search.ON_PAGE_CHANGE,
    payload: pageIndex
})