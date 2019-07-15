import get from 'lodash/get';
import { actionTypes } from './../actions/action-types';

const INITIAL_STATE = {
    searchTerm: '',
    listings: [],
    pageTitle: ''
};

const hotelListingReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case actionTypes.search.SEARCH_HOTELS:
            return {
                ...state,
                searchTerm: action.payload
            }
        case actionTypes.search.SEARCH_HOTELS_SUCCESS:
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
                listings: get(action.payload, 'data.listings', []),
                pageTitle: get(action.payload, 'data.pageTitle', '')
            }
        /**
         * Return default state
         */
        default:
            return INITIAL_STATE;
    }
}

export default hotelListingReducer;