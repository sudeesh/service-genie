import axios from "axios";

axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";

const apiSg = axios.create({
  baseURL: "https://157.245.105.114:8443/api/v1",
});

const setAuthentication = (config) => {
  const username = "servicegenie";
  const password = "pranav";
  const basicAuth = `Basic ${btoa(username + ":" + password)}`;
  config.headers.Authorization = basicAuth;
  return config;
};

apiSg.interceptors.request.use(setAuthentication);

const apiClient = {
  delete: (request, instance) =>
    (instance || axios).delete(request.endpoint, request),
  get: (request, instance) =>
    (instance || axios).get(request.endpoint, request),
  post: (request, instance) =>
    (instance || axios).post(request.endpoint, request.body, request),
  put: (request, instance) =>
    (instance || axios).put(request.endpoint, request.body, request),
};

export const sgServices = {
  delete: (request) => apiClient.delete(request, apiSg),
  file: (request) => {
    const data = Object.keys(request.data).reduce((formData, key) => {
      formData.append(key, request.data[key]);
      return formData;
    }, new FormData());
    return apiSg.post(request.endpoint, data);
  },
  get: (request) => apiClient.get(request, apiSg),
  post: (request) => apiClient.post(request, apiSg),
  put: (request) => apiClient.put(request, apiSg),
};

export default sgServices;
