export const apiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://my-json-server.typicode.com/sv-e/sve/"
    : `${window.location.origin}/`;

export const makeUrl = (urlSuff) => `${apiBaseUrl}/${urlSuff}`;

// export const apiBaseUrl =
//   process.env.NODE_ENV === "development"
//     ? "https://my-json-server.typicode.com/sv-e/sve/"
//     : `${window.location.origin}/`;

// export const makeUrl = (urlSuff) => `${apiBaseUrl}/${urlSuff}`;