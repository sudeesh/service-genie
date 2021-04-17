import axios from "axios";
export const getAllUniqueGarages = () =>
  axios.get("http://20.198.80.220:8080/api/v1/getAllUniqueGarageLocations");

export const getAllGarages = () =>
  axios.get("http://20.198.80.220:8080/api/v1/getAllGarages");

export const getLocationByLocation = (location) =>
  axios.get(
    `http://20.198.80.220:8080/api/v1/getGaragesOnLocation?location=${location}`
  );

export const getGaragesByName = (name) =>
  axios.get(
    `http://20.198.80.220:8080/api/v1/getGarageDetailsByName?garageName=${name}`
  );

export const getAllGaragesUsingRegex = (name) =>
  axios.get(
    `http://20.198.80.220:8080/api/v1/getAllGaragesUsingRegex?garageNameContaining=${name}`
  );
