import { createSlice } from '@reduxjs/toolkit';
import { PARTNERS } from '../../app/shared/PARTNERS'

const initialState = {
    partnersArray: PARTNERS
};

const partnerSlice = createSlice({
    name: 'parnters',
    initialState
});

export const partnersReducer = partnerSlice.reducer;

export const selectAllPartners = (state) => {
    return state.partners.partnersArray;
};

export const selectFeaturedPartner = (state) => {
    return state.partners.partnersArray.find((partner) => partner.featured);
};