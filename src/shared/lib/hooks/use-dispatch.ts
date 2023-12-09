import {useDispatch} from "react-redux";
import {AppDispatch} from "@/app/providers/store-provider";

export const useTypeDispatch = () => useDispatch<AppDispatch>()
