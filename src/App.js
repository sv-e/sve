import "./App.scss";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import messages from "./i18n/messages/index";

import MainLayout from "./layouts/MainLayout";
import Loader from "./components/Loader";

import { setCountryCode } from "./redux/slices/infoSlice";
import { useGetCountryCodeMutation } from "./redux/services/locationApi";

import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";

export default function App() {
  const dispatch = useDispatch();

  const [getCountryCode, { isLoading: isGetCountryCodeLoading }] = useGetCountryCodeMutation();

  const info = useSelector((state) => state.info);

  const isLoading = isGetCountryCodeLoading;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCountryCode();
      dispatch(setCountryCode(data.country_code));
    };
    fetchData();
  }, []);

  const locale = info.countryCode === "ru" ? "ru" : "en";

  const isProdDomain = useMemo(() => {
    return (
      window.location.href.includes("vercel") ||
      window.location.href.includes("vercel.app") ||
      window.location.href.includes("sv-e.vercel.app") ||
      window.location.href.includes("localhost")
    );
  }, [window.location.href]);

  useEffect(() => {
    if (isProdDomain) {
      ReactGA.initialize("G-460PGEB7KD");
      ReactGA.send("pageview");
      TagManager.initialize({
        gtmId: "GT-NN6CCRB"
      });
    }
  }, [isProdDomain]);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="App">
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale={LOCALES.EN}>

        <ToastContainer />

        <BrowserRouter>
          <MainLayout>
            <MainRoutes />
          </MainLayout>
        </BrowserRouter>
      </IntlProvider>
    </div>
  );
}


// import { BrowserRouter } from "react-router-dom";

//         <BrowserRouter>
//           ...
//         </BrowserRouter>