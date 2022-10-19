export const apiBaseUrl =
  process.env.NODE_ENV === "development"
    ? "https://my-json-server.typicode.com/sv-e/sve/"
    : `${window.location.origin}/`;

export const makeUrl = (urlSuff) => `${apiBaseUrl}/${urlSuff}`;

// export const apiBaseUrl =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:3001"
//     : `${window.location.origin}/api`;

// export const makeUrl = (urlSuff) => `${apiBaseUrl}/${urlSuff}`;

// json-server - https://my-json-server.typicode.com/userName(github.com)/RepositirieName(github.com)/