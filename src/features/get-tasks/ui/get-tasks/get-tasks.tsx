import {useGetTasksQuery} from "../../api/tasks.api.ts";
import {TaskList} from "@/entities/task-list";
import {PageLoader} from "@/widgets/page-loader";
import {Text} from "@/shared/ui/text";

const GetTasks = () => {
    const {isLoading, data: tasks, isError} = useGetTasksQuery();

    if (isLoading) {
        return <PageLoader/>;
    }

    return (
        <div className="flex justify-center items-center py-5">
            {!tasks || !tasks.length ? (
                <Text tag={"h1"} isHeader={true}>
                    No tasks data <br/>
                </Text>
            ) : (
                <TaskList tasks={tasks}/>
            )}
            {isError && <Text isError={true} isHeader={true} isCenter={true}>Server error</Text>}

        </div>
    );
};

export default GetTasks;
