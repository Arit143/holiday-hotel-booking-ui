import { createSelector } from 'reselect'

const listingSelector = state => state.hotelListing.listings;

export const listingState = createSelector(
    listingSelector,
    hotelListing => hotelListing
);