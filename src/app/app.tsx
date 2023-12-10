import {AppRouter} from "@/app/providers/router";
import {WithProvider} from "./providers/with-provider.tsx";
import {ErrorBoundary} from "@/app/providers/error";
import {StoreProvider} from "@/app/providers/store-provider";
import BaseLayout from "@/app/providers/base-layout/ui/base-layout.tsx";

const App = () => {
    return (
        <ErrorBoundary>
            <StoreProvider>
                <BaseLayout>
                    <AppRouter/>
                </BaseLayout>
            </StoreProvider>
        </ErrorBoundary>
    );
};

export default WithProvider(App);
