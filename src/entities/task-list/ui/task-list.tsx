import {ITask} from "@/entities/task/model/types/task.ts";
import {FC} from "react";
import {TaskCard} from "@/entities/task";

interface TaskListProps {
    tasks: ITask[] | undefined
}

const TaskList: FC<TaskListProps> = (props) => {

    const {tasks} = props


    return (
        <div className="grid grid-cols-3 gap-7">
            {tasks?.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    );
};

export default TaskList;
