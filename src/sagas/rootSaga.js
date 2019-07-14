import { all } from 'redux-saga/effects';

import { searchLocation } from './hotelListing.saga';

export default function* rootSaga() {
    yield all([
        searchLocation()
    ]);
 }