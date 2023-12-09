import {StoreProvider} from "./ui/store-provider.tsx";
import {StateSchema} from "./config/state-schema.ts";
import {createMyStore} from "./config/store.ts";
import {AppDispatch} from "./config/store.ts"

export {
    StoreProvider,
    createMyStore
}
export type {
    StateSchema,
    AppDispatch
}
