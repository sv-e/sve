export const apiBaseUrl =
  process.env.NODE_ENV === "development"
    ? "https://sv-e.herokuapp.com"
    : `${window.location.origin}/api`;

export const makeUrl = (urlSuff) => `${apiBaseUrl}/${urlSuff}`;


// http://localhost:3001