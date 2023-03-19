import { CAMPSITES } from '../../app/shared/CAMPSITES'

export const selectAllCampsites = () => {    //define and export function in same line
    return CAMPSITES;
};

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};