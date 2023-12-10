import {rtkApi} from "@/shared/api/rtk-api.ts";

const deleteTaskApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        deleteTask: build.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
                credentials: 'include',
            })
        })
    })
})

export const {useDeleteTaskMutation: useDeleteTask} = deleteTaskApi
