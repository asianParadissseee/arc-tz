import {Route, Routes} from "react-router-dom";
import {routeConfig} from "@/shared/config/router-config/router-config.tsx";
import {Suspense} from "react";
import {Loader} from "@/shared/ui/loader";

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<Loader/>}>
                            {element}
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};


