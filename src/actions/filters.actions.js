import { actionTypes } from './action-types';

export const onSort = (order) => ({
    type: actionTypes.filters.ON_SORT,
    payload: order
});

export const onBedroomFilterChange = (bedroom) => ({
    type: actionTypes.filters.ON_BEDROOM_SELECT,
    payload: bedroom
})