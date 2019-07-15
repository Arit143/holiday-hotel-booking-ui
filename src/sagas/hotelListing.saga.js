import { put, takeLatest, call, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { actionTypes } from './../actions/action-types';

import { API_URL } from './../constants/app.constants';

/**
 * 
 * @param {*} searchTerm 
 * API to get the location listings for a search term
 */

function searchTermListingApi(searchTerm) {
    return axios.get(`${API_URL}/hotels?searchTerm=${searchTerm}`);
}

/**
 * 
 * @param {*} action 
 * Generator yield to put meta data success with payload
 * {payload: {
 *  searchTerm: searchTerm for listings
 *  data: listings data
 * }}
 */
function* fetchListings(action) {    
    try {
        const searchTermResponse = yield call(searchTermListingApi, action.payload);
        yield put({ type: actionTypes.search.SEARCH_HOTELS_SUCCESS, payload: {
            searchTerm: action.payload,
            data: searchTermResponse.data.data
        }});
    } catch (err) {
        yield put({ type: actionTypes.search.SEARCH_HOTELS_FAILURE, payload: {
            searchTerm: action.payload
        } });
    }
}

/**
 * Watchers on ACTION dispatch
 */

export function* searchLocation() {
    yield takeLatest(actionTypes.search.SEARCH_HOTELS, fetchListings)
}