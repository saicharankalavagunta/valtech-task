import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const AddProperty = lazy(() => import("../pages/AddProperty"));

const HomeComponent = Home;
const AddPropertyComponent = AddProperty

const ADD_PROPERTY_PATH = '/addproperty';


export const GlobalRoutes = {
    HOME: {
        name: "Home",
        path: "/",
        exact: true,
        component: HomeComponent,
    },
    ADD_PROPERTY: {
        name: "Add Property",
        path: ADD_PROPERTY_PATH,
        component: AddPropertyComponent,
    },
};
