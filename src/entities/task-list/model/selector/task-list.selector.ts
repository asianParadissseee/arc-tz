import {StateSchema} from "@/app/providers/store-provider";


export const TaskListSelector = (state: StateSchema) => state.tasks.tasks
