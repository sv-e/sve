import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { apiBaseUrl } from "./makeUrl";
import { APP_ROUTE, NOT_FOUND, URLS_PROCESSED_IN_COMPONENTS } from "./constants";

const notify = (text) => toast.error(text, {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
});

export const requestErrorLogger = () => (next) => (action) => {
    if (action && isRejectedWithValue(action)) {
      if (action.payload?.data?.errors?.length && action.payload.data.errors[0].restaurant === NOT_FOUND &&
        !window.location.href.includes(APP_ROUTE.CHOOSE_RESTAURANT) &&
        !window.location.href.includes(APP_ROUTE.RESTAURANT_REGISTRATION)
      ) {
         window.location.href = APP_ROUTE.CHOOSE_RESTAURANT;
      }
        const responseUrl = action.meta.baseQueryMeta.response.url;
        let notNotify = true;
        if (action.payload.status === 401 || action.payload.status === 400) {
            notNotify = false;
        } else {
            notNotify = !URLS_PROCESSED_IN_COMPONENTS.map(item => apiBaseUrl + item).some(url => url === responseUrl ||

                // for "/password/reset/confirm/"
                url === responseUrl.split("/", 7).join("/") + "/");
        }
        if ((responseUrl !== apiBaseUrl + "/token/") && action.payload.status === 502) {
            notNotify = false;
        }
        notNotify && notify((action.payload.originalStatus >= 500 && "Server error") || action.payload.data.errors[0].image[0]);
    }
    return next(action);
};
