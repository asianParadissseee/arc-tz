import {RouteProps} from "react-router-dom";
import {Home} from "@/pages/home";
import {FormPage} from "@/pages/form-page";
import {TasksPage} from "@/pages/tasks-page";

export enum AppRoutes {
    HOME = "home",
    FORM_PAGE = "form",
    TASKS_PAGE = 'tasks'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.FORM_PAGE]: "/form",
    [AppRoutes.TASKS_PAGE]: "/tasks"
}


export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <Home/>
    },
    [AppRoutes.FORM_PAGE]: {
        path: RoutePath.home,
        element: <FormPage/>
    },
    [AppRoutes.TASKS_PAGE]: {
        path: RoutePath.tasks,
        element: <TasksPage/>
    }
}

