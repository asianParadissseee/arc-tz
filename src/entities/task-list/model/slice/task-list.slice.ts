import {createSlice} from "@reduxjs/toolkit";
import {ITaskList} from "../types/task-list.ts";


const initialState: ITaskList = {
    tasks: []
}

export const TaskListSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
})

export const {actions, reducer: TasksListReducer} = TaskListSlice
