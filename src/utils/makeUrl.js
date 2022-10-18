// export const apiBaseUrl =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:3001"
//     : `${window.location.origin}/api`;

// export const makeUrl = (urlSuff) => `${apiBaseUrl}/${urlSuff}`;

export const apiBaseUrl =
  process.env.NODE_ENV === "development"
    ? "https://sv-e.herokuapp.com"
    : `${window.location.origin}/api`;

export const makeUrl = (urlSuff) => `${apiBaseUrl}/${urlSuff}`;