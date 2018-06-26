const { REACT_APP_LCBO_API_KEY } = process.env;
console.log(process.env);

const LCBO_API_BASE_URL = "https://lcboapi.com/";

const objectToQueryParams = params =>
  Object.keys(params)
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join("&");

export const fetchLcboEndpoint = (endpoint, params, options = {}) =>
  fetch(`${LCBO_API_BASE_URL}${endpoint}?${objectToQueryParams(params)}`, {
    ...options,
    headers: {
      Authorization: `Token ${REACT_APP_LCBO_API_KEY}`
    }
  }).then(res => res.json());
