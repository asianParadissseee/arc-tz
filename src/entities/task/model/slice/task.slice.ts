import {createSlice} from "@reduxjs/toolkit";
import {ITask} from "../types/task.ts";

const initialState: ITask = {
    id: new Date().getMilliseconds(),
    userId: new Date().getMilliseconds(),
    status: "",
    title: "",
    body: ""
}

const TaskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
})

export const {actions, reducer} = TaskSlice
