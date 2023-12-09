import {useTypeDispatch} from "./use-dispatch.ts";
import {bindActionCreators} from "@reduxjs/toolkit";

const actions = {
    // ...values
}

export const useAction = () => {
    const dispatch = useTypeDispatch()
    return bindActionCreators(actions, dispatch)
}
