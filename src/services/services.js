import { sgServices } from "./apiUtils";

export const getAllUniqueGarages = () =>
  sgServices.get({ endpoint: "/getAllUniqueGarageLocations" });

export const getAllGarages = () =>
  sgServices.get({ endpoint: "/getAllGarages" });

export const getLocationByLocation = (location) =>
  sgServices.get({ endpoint: `/getGaragesOnLocation?location=${location}` });

export const getGaragesByName = (name) =>
  sgServices.get({ endpoint: `/getGarageDetailsByName?garageName=${name}` });

export const getAllGaragesUsingRegex = (name) =>
  sgServices.get({
    endpoint: `/getAllGaragesUsingRegex?garageNameContaining=${name}`,
  });

export const getAllGaragesByLatAndLong = (distance, latitude, longitude) =>
  sgServices.get({
    endpoint: `/getGaragesByLatAndLong?distanceInKms=${distance}&latitude=${latitude}&longitude=${longitude}`,
  });

export const getReviewRating = (value, location) =>
  sgServices.get({
    endpoint: `getOverallReviewRatingsOfGarage?garageName=${value}&location=${location}`,
  });

export const getOverallReviewRating = (value, location) =>
  sgServices.get({
    endpoint: `getOverallReviewRatingsOfGarage?garageName=${value}&location=${location}`,
  });
