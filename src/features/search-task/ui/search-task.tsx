import {Input} from "@/shared/ui/input";
import {useEffect, useState} from "react";
import {useSearchTasksQuery} from "@/features/search-task/api/search-task.api.ts";
import {useDebounce} from "@/shared/lib/hooks/use-debounce.tsx";


const SearchTask = () => {
    const [searchTask, setSearchTask] = useState("")
    const debounce = useDebounce(searchTask)

    const {} = useSearchTasksQuery(debounce, {
        skip: debounce.length < 3,
        refetchOnFocus: true
    })


    useEffect(() => {
        console.log(debounce)
    }, [debounce]);

    return (
        <div>
            <Input width={"w-48"} placeholder={"Поиск"} type={"search"}
                   onChange={(event) => setSearchTask(event.target.value)} value={searchTask}/>

        </div>
    );
};

export default SearchTask;
