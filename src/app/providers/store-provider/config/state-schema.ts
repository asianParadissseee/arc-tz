import {rtkApi} from "@/shared/api/rtk-api.ts";
import {ITaskList,} from "@/entities/task-list";

export interface StateSchema {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
    tasks: ITaskList
}
