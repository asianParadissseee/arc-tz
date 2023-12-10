import {GetTasks} from "@/features/get-tasks";
import {Text} from "@/shared/ui/text";
import {useSelector} from "react-redux";
import {StateSchema} from "@/app/providers/store-provider";

const TasksPage = () => {

    const {tasks} = useSelector((state: StateSchema) => state.tasks)

    console.log(tasks)

    return (
        <div>
            <Text isHeader={true} isCenter={true}>Our tasks</Text>
            <GetTasks/>
        </div>
    );
};

export default TasksPage;
