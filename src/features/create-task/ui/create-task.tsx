import {useCreateTask} from "../api/create-task.api.ts";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {ChangeEvent, Dispatch, SyntheticEvent, useState} from "react";

const CreateTask = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [] = useState("")
    const [createTask, {}] = useCreateTask({})

    type ChangeHandler = ChangeEvent<HTMLInputElement>;


    const handleChange = (setState: Dispatch<React.SetStateAction<string>>) => (event: ChangeHandler) => {
        setState(event.target.value)
    }

    const handleCreate = async (e: SyntheticEvent) => {
        e.preventDefault()
        return await createTask({
            title: title, body: body,
            status: ""
        })
        setTitle("")
        setBody("")
    }


    return (
        <form onSubmit={handleCreate}>
            <Input placeholder={"Write your title"} value={title} onChange={handleChange(setTitle)}/>
            <Input placeholder={"Write your body message"} value={body} onChange={handleChange(setBody)}/>
            <Button type={"submit"}>
                Create Task
            </Button>
        </form>
    );
};

export default CreateTask;
