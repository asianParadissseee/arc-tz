import {ITask} from "@/entities/task/model/types/task.ts";
import {FC} from "react";
import {Text} from "@/shared/ui/text";
import {Button} from "@/shared/ui/button";


interface TaskCardProps {
    task: ITask
}

const TaskCard: FC<TaskCardProps> = (props) => {

    const {task} = props

    const {id, title, status} = task

    return (
        <div
            className="block  max-w-sm  p-6 border border-gray-200 rounded-lg shadow">
            <Text tag={"p"} isHeader={true}>{id}. {title}</Text>

            <div className="flex justify-between items-center">
                <Button>
                    Подробнее
                </Button>
                <Text> Статус: {status}</Text>
            </div>

        </div>
    );
};

export default TaskCard;
