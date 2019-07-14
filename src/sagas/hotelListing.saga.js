import { put, takeLatest, call, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { actionTypes } from './../actions/action-types';
import { searchTermSelector } from './../selectors/search.selectors';

import { API_URL } from './../constants/app.constants';

/**
 * 
 * @param {*} searchTerm 
 * API to get the location listings for a search term
 */

function searchTermApi(searchTerm) {
    return axios.get(`${API_URL}/${searchTerm}/peers`);
}

/**
 * 
 * @param {*} action 
 * Generator yield to put meta data success with payload
 * {payload: {
 *  ticker: peerName
 *  data: metaData
 * }}
 */
function* fetchMetaData(action) {    
    try {
        const searchTermResponse = yield call(fetchMetaDataApi, action.payload);
        yield put({ type: `@search/${actionTypes.search.GET_META_DATA_SUCCESS}`, payload: {
            ticker: action.payload,
            data: searchTermResponse.data 
        }});
    } catch (err) {
        yield put({ type: `@search/${actionTypes.search.GET_META_DATA_FAILURE}`, payload: {
            ticker: action.payload
        } });
    }
}

/**
 * Watchers on ACTION dispatch
 */

export function* searchLocation() {
    yield takeLatest(`@search/${actionTypes.search.GET_SEARCH_PEERS}`, fetchListings)
}