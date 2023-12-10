import {rtkApi} from "@/shared/api/rtk-api.ts";
import {ITask} from "@/entities/task/model/types/task.ts";

const tasksApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getTasks: build.query<ITask[], void>({
            query: (limit) => ({
                url: "/tasks",
                params: {
                    _limit: limit
                }
            })
        }),
        getTaskDetail: build.query<ITask, string>({
            query: (id) => ({
                url: `tasks/:${id}`,
            })
        }),
        createTask: build.mutation({
            query: () => ({
                url: "/tasks",
                params: {},
                method: "POST"
            })
        })
    })
})


export const {useGetTasksQuery, useCreateTaskMutation, useGetTaskDetailQuery} = tasksApi
