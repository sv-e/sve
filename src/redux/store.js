import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeSlice from "./slices/themeSlice";
import infoSlice from "./slices/infoSlice";
import { worksApi } from "./services/worksApi";
import { locationApi } from "./services/locationApi";
// import { requestErrorLogger } from "../utils/requestErrorLogger";
const { configureStore  } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    info: infoSlice,
    themeStore: persistReducer({ key: "theme", storage }, themeSlice),
    [worksApi.reducerPath]: worksApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat([
      worksApi.middleware,
      locationApi.middleware
    ])
  ]
});