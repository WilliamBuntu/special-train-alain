import { lazy } from "react";
import { Navigate } from "react-router-dom";


import Programs from "../components/Programs/Programs.js";




/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Homepage = lazy(() => import( "../components/Homepage/Homepage"));
const AboutPage = lazy(() => import( "../components/AboutPage/AboutPage"));
const Programspage = lazy(() => import( "../components/Programs/Programs"));
const InTheNews =lazy(()=> import("../components/InTheNews/InTheNews"))
const Contactus =lazy(()=> import("../components/Contactus"))
const Account =lazy(()=> import("../components/Account"))
const Signup =lazy(()=> import("../components/Signup"))
const Login =lazy(()=> import("../components/Login"))
const Singlestudent =lazy(()=> import("../components/Singlestudent"))
const Register =lazy(()=> import("../components/Register"))
// const Staff =lazy(()=> import("../components/Staff/Staff"))


/*****Routes******/

const ThemeRoutes = [
  {
path: "/",
element:<Homepage/>,
  },
  {
path: "/AboutPage",
element:<AboutPage/>,
  },
  {
path: "/Programspage",
element:<Programspage/>,
  },
  {
path: "/Newspage",
element:<InTheNews/>,
  },
  {
path: "/Contactpage",
element:<Contactus/>,
  },
  {
path: "/Accountpage",
element:<Account/>,
  },
  {
path: "/Signuppage",
element:<Signup/>,
  },
  {
path: "/Loginpage",
element:<Login/>,
  },
  {
path: "/Projectpage",
element:<Singlestudent/>,
  },
  
  {
path: "/Registerpage",
element:<Register/>,
  },
  
// path: "/Staff",
// element: <Staff/>,
//   },
  {
    
    path: "/dashboard",
    element: <FullLayout />,
    children: [
      { path: "/dashboard", element: <Navigate to="/starter" /> },
      { path: "/dashboard/starter", exact: true, element: <Starter /> },
      { path: "/dashboard/about", exact: true, element: <About /> },
      { path: "/dashboard/alerts", exact: true, element: <Alerts /> },
      { path: "/dashboard/badges", exact: true, element: <Badges /> },
      { path: "/dashboard/buttons", exact: true, element: <Buttons /> },
      { path: "/dashboard/cards", exact: true, element: <Cards /> },
      { path: "/dashboard/grid", exact: true, element: <Grid /> },
      { path: "/dashboard/table", exact: true, element: <Tables /> },
      { path: "/dashboard/forms", exact: true, element: <Forms /> },
      { path: "/dashboard/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
