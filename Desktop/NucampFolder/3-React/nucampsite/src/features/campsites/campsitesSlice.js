import { CAMPSITES } from '../../app/shared/CAMPSITES'

export const selectAllCampsites = () => {    //define and export function in same line
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));  // find first campsite with id that is passed in, parseInt changes string to integer
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};