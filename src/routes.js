import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { APP_ROUTE } from "./utils/constants";

import Loader from "./components/Loader";
const Home = lazy(() => import("./views/Home/Home"));
const Works = lazy(() => import("./views/Works/Works"));
const Work = lazy(() => import("./views/Works/Work"));
const Contact = lazy(() => import("./views/Contact/Contact"));

export const MainRoutes = () => {  
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path={APP_ROUTE.HOME} element={<Home />} />
        <Route exact path={APP_ROUTE.WORKS} element={<Works />} />
        <Route exact path={APP_ROUTE.WORK} element={<Work />} />
        <Route exact path={APP_ROUTE.CONTACT} element={<Contact />} />

        <Route
          path={APP_ROUTE.ENTRY}
          element={<Navigate replace to={APP_ROUTE.HOME} />}
        />
      </Routes>
    </Suspense>
  );
};