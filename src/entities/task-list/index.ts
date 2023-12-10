import TaskList from "./ui/task-list.tsx";
import {TaskListSlice, TasksListReducer} from "./model/slice/task-list.slice.ts"
import {ITaskList} from "./model/types/task-list.ts"
import {TaskListSelector} from "./model/selector/task-list.selector.ts"

export {
    TaskList,
    TaskListSlice,
    TasksListReducer,
    TaskListSelector
}
export type {ITaskList}

