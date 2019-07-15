import { actionTypes } from './action-types';

export const onLanguageChange = (language) => ({
    type: actionTypes.app.ON_LANGUAGE_CHANGE,
    payload: language
})