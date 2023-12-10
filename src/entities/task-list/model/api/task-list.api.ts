import {rtkApi} from "@/shared/api/rtk-api.ts";
import {ITask} from "@/entities/task/model/types/task.ts";

const taskListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getTask: build.query<ITask[], void>({
            query: () => ({
                url: `/tasks`,
                method: "GET",
            })
        })
    })
})


export const {useGetTaskQuery: useGetTask} = taskListApi
