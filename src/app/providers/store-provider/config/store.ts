import {StateSchema} from "./state-schema.ts";
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {rtkApi} from "@/shared/api/rtk-api.ts";
import {TasksListReducer} from "@/entities/task-list";
import {setupListeners} from "@reduxjs/toolkit/query";

export function createMyStore(initState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        [rtkApi.reducerPath]: rtkApi.reducer,
        tasks: TasksListReducer
    }


    return configureStore<StateSchema>(
        {
            reducer: rootReducers,
            preloadedState: initState,
            middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rtkApi.middleware)
        }
    )
}

setupListeners(createMyStore().dispatch)

export type AppDispatch = ReturnType<typeof createMyStore>["dispatch"]
