import {AppRouter} from "@/app/providers/router";
import {WithProvider} from "./providers/with-provider.tsx";
import {ErrorBoundary} from "@/app/providers/error";
import {StoreProvider} from "@/app/providers/store-provider";

const App = () => {
    return (
        <ErrorBoundary>
            <StoreProvider>
                <AppRouter/>
            </StoreProvider>
        </ErrorBoundary>
    );
};

export default WithProvider(App);
