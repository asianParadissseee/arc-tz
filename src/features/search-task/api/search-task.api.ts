import {rtkApi} from "@/shared/api/rtk-api.ts";
import {ITask} from "@/entities/task/model/types/task.ts";

const searchTaskApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        searchTasks: build.query<ITask[], string>({
            query: (search: string) => ({
                url: `/tasks?q=${search}`,
                params: {
                    q: search
                },
            }),
        }),
    }),
})


export const {useSearchTasksQuery: useSearchTasksQuery} = searchTaskApi
