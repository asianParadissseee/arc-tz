import {RouteProps} from "react-router-dom";
import {Home} from "@/pages/home";

export enum AppRoutes {
    HOME = "home"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/"
}


export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <Home/>
    }
}

