import {rtkApi} from "@/shared/api/rtk-api.ts";
import {ITask} from "@/entities/task/model/types/task.ts";

const createTaskApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        createTask: build.mutation<ITask, ITask>({
            query: (task) => ({
                url: `/tasks`,
                method: "POST",
                body: task
            })
        })
    })
})

export const {useCreateTaskMutation: useCreateTask} = createTaskApi
