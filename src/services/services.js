import axios from "axios";
export const getAllUniqueGarages = () =>
  axios.get("http://13.235.168.116:8080/api/v1/getAllUniqueGarageLocations");

export const getAllGarages = () =>
  axios.get("http://13.235.168.116:8080/api/v1/getAllGarages");

export const getLocationByLocation = (location) =>
  axios.get(
    `http://13.235.168.116:8080/api/v1/getGaragesOnLocation?location=${location}`
  );

export const getGaragesByName = (name) =>
  axios.get(
    `http://13.235.168.116:8080/api/v1/getGarageDetailsByName?garageName=${name}`
  );

export const getOverallReviewRatingsOfGarage = (name, location) => {
  axios.get(
    `http://13.235.168.116:8080/api/v1/getOverallReviewRatingsOfGarage?garageName=${name}&location=${location}`
  );
};
