import {GetTasks} from "@/features/get-tasks";
import {Text} from "@/shared/ui/text";
import {PageLoader} from "@/widgets/page-loader";
import {SearchTask} from "@/features/search-task";
import {TaskList, useGetTask} from "@/entities/task-list";

const TasksPage = () => {


    const {isLoading, data: tasks, isError} = useGetTask();

    if (isLoading) {
        return <PageLoader/>;
    }

    return (
        <div>
            <Text isHeader={true} isCenter={true}>Our tasks</Text>
            <SearchTask />
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
        </div>
    );
};

export default TasksPage;
