import { FormattedMessage } from "react-intl";
import { Link, NavLink } from "react-router-dom";

import { APP_ROUTE } from "../utils/constants";

import logo from "../assets/images/logo.svg";
import Switch from "../components/Switch";

export default function Nav(){
  return (
    <>      
      <nav className="
        bg-white
        px-2
        sm:px-4
        md:py-3
        fixed
        top-0
        left-0
        right-0
        dark:bg-black
        z-50
        landscape:bg-dark
      ">
        <div className="
          container
          flex
          flex-wrap
          justify-between
          items-center
          mx-auto
        ">
          <Link
            to="/"
            className="
              flex
              items-center
              transition
              duration-200
              ease-linear
              select-none
            ">
            <img
              src={logo}
              className="md:mr-3 h-5 sm:h-5"
              alt="SVE"
              width="83.14"
              height="20" />
          </Link>

          <div
            className="
              fixed
              z-20
              bottom-0
              left-0
              right-0
              bg-white
              dark:bg-black
              px-10
              w-full
              mx-auto
              md:block
              md:static
              md:w-auto
              md:px-0
              md:py-0
            "
            id="navbar">
            <ul
              className="
                flex
                justify-between
                md:space-x-20
                md:font-medium
                transition
                duration-200
                ease-linear
              ">
              <li className="w-1/3">
                <NavLink
                  to={APP_ROUTE.HOME}
                  className={({ isActive }) => (isActive ? "after:opacity-1" : "after:opacity-0") +                               
                             " flex" +
                             " items-center" +
                             " justify-center" +
                             " relative" +
                             " py-4" +
                             " md:py-0" +
                             " w-full" +
                             " uppercase" +
                             " text-sev-dark" +
                             " text-sm" +
                             " font-medium" +
                             " indent-[2px]" +
                             " md:hover:bg-transparent" +
                             " md:border-0" +
                             " md:hover:text-sev-dark" +
                             " md:p-0" +
                             " dark:text-sev-gray-400" +
                             " md:dark:hover:text-white" +
                             " dark:hover:bg-gray-700" +
                             " dark:hover:text-white" +
                             " md:dark:hover:bg-transparent" +
                             " after:w-[7px]" +
                             " after:h-[7px]" +
                             " after:rounded-full" +
                             " after:bg-sev-dark" +
                             " after:ml-2" +
                             " dark:after:bg-white" +
                             " transition" +
                             " duration-200" +
                             " ease-linear" +
                             " after:transition" +
                             " after:duration-200" +
                             " after:ease-linear"
                          }>
                  <FormattedMessage id="home" />
                </NavLink>
              </li>
              <li className="w-1/3">
                <NavLink
                  to={APP_ROUTE.WORKS}
                  className={({ isActive }) => (isActive ? "after:opacity-1" : "after:opacity-0") +                               
                             " flex" +
                             " items-center" +
                             " justify-center" +
                             " relative" +
                             " py-4" +
                             " md:py-0" +
                             " w-full" +
                             " uppercase" +
                             " text-sev-dark" +
                             " text-sm" +
                             " font-medium" +
                             " indent-[2px]" +
                             " md:hover:bg-transparent" +
                             " md:border-0" +
                             " md:hover:text-sev-dark" +
                             " md:p-0" +
                             " dark:text-sev-gray-400" +
                             " md:dark:hover:text-white" +
                             " dark:hover:bg-gray-700" +
                             " dark:hover:text-white" +
                             " md:dark:hover:bg-transparent" +
                             " after:w-[7px]" +
                             " after:h-[7px]" +
                             " after:rounded-full" +
                             " after:bg-sev-dark" +
                             " after:ml-2" +
                             " dark:after:bg-white" +
                             " transition" +
                             " duration-200" +
                             " ease-linear" +
                             " after:transition" +
                             " after:duration-200" +
                             " after:ease-linear"
                          }>
                  <FormattedMessage id="work" />
                </NavLink>
              </li>
              <li className="w-1/3">
                <NavLink
                  to={APP_ROUTE.CONTACT}
                  className={({ isActive }) => (isActive ? "after:opacity-1" : "after:opacity-0") +                               
                             " flex" +
                             " items-center" +
                             " justify-center" +
                             " relative" +
                             " py-4" +
                             " md:py-0" +
                             " w-full" +
                             " uppercase" +
                             " text-sev-dark" +
                             " text-sm" +
                             " font-medium" +
                             " indent-[2px]" +
                             " md:hover:bg-transparent" +
                             " md:border-0" +
                             " md:hover:text-sev-dark" +
                             " md:p-0" +
                             " dark:text-sev-gray-400" +
                             " md:dark:hover:text-white" +
                             " dark:hover:bg-gray-700" +
                             " dark:hover:text-white" +
                             " md:dark:hover:bg-transparent" +
                             " after:w-[7px]" +
                             " after:h-[7px]" +
                             " after:rounded-full" +
                             " after:bg-sev-dark" +
                             " after:ml-2" +
                             " dark:after:bg-white" +
                             " transition" +
                             " duration-200" +
                             " ease-linear" +
                             " after:transition" +
                             " after:duration-200" +
                             " after:ease-linear"
                          }>
                  <FormattedMessage id="contact" />
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <Switch />
          </div>
        </div>
      </nav>    
    </>
  );
}