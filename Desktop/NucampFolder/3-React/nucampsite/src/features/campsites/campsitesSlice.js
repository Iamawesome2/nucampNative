import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES'

const initialState = {
    campsitesArray: CAMPSITES  // set a property of campsitesArray and set value to CAMPSITES array
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState            // key and object name for the value are the same
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {    //define and export function in same line
    return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)  // find first campsite with id that is passed in, parseInt changes string to integer
    );
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};
