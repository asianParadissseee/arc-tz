import {StateSchema} from "./state-schema.ts";
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";

export function createMyStore(initState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {}

    return configureStore<StateSchema>(
        {
            reducer: rootReducers,
            preloadedState: initState
        }
    )
}

export type AppDispatch = ReturnType<typeof createMyStore>["dispatch"]
