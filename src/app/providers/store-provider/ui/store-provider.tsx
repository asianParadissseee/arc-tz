import {Provider} from "react-redux";
import {FC, ReactNode} from "react";
import {createMyStore, StateSchema} from "@/app/providers/store-provider";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {children, initialState} = props
    const store = createMyStore(initialState)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

