/* eslint-disable */
import React from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import DashIcon from "src/components/icons/DashIcon";
// chakra imports

export const SidebarLinks = (props: { routes: RoutesType[] }): JSX.Element => {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  const { userId } = useParams()
  console.log(userId)

  return (
    <>
      {routes.map((route, index) => {
        if(route.path === "view-patients/:userId") {
          return (
            <button className="w-fit h-fit" disabled={userId ? false : true}>
              <NavLink key={index} to={route.layout + "/" + userId} className={({ isActive }) => `relative mb-3 flex hover:cursor-pointer ${isActive && "after:absolute after:right-0 after:top-px after:h-9 after:w-1 after:rounded-lg after:bg-brand-500 after:dark:bg-brand-400"}`}>
                <li
                  className="my-[3px] flex cursor-pointer items-center px-8"
                  key={index}
                >
                  <span
                    className={`${
                      activeRoute(route.path) === true
                        ? "font-bold text-brand-500 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.icon ? route.icon : <DashIcon />}{" "}
                  </span>
                  <p
                    className={`leading-1 ml-4 flex ${
                      activeRoute(route.path) === true
                        ? "font-bold text-navy-700 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.name}
                  </p>
                </li>
              </NavLink>
            </button>
          )
        }
        return (
          <NavLink key={index} to={route.layout + "/" + route.path} className={({ isActive }) => `relative mb-3 flex hover:cursor-pointer ${isActive && "after:absolute after:right-0 after:top-px after:h-9 after:w-1 after:rounded-lg after:bg-brand-500 after:dark:bg-brand-400"}`}>
            <li
              className="my-[3px] flex cursor-pointer items-center px-8"
              key={index}
            >
              <span
                className={`${
                  activeRoute(route.path) === true
                    ? "font-bold text-brand-500 dark:text-white"
                    : "font-medium text-gray-600"
                }`}
              >
                {route.icon ? route.icon : <DashIcon />}{" "}
              </span>
              <p
                className={`leading-1 ml-4 flex ${
                  activeRoute(route.path) === true
                    ? "font-bold text-navy-700 dark:text-white"
                    : "font-medium text-gray-600"
                }`}
              >
                {route.name}
              </p>
            </li>
          </NavLink>
        );
      })}
    </>
  )
};

export default SidebarLinks;
