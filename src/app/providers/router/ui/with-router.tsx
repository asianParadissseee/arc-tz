import {ReactNode} from "react";
import {BrowserRouter} from "react-router-dom";

export const WithRouter = (component: () => ReactNode) => () => (
    <BrowserRouter>
        {component()}
    </BrowserRouter>
)



