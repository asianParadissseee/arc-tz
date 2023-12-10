import {Loader, LoaderProps} from "@/shared/ui/loader";
import {FC} from "react";


const PageLoader: FC<LoaderProps> = (props) => {
    const {width, color} = props
    return (
        <div className={"flex justify-center items-center grow min-h-screen"}>
            <Loader width={width} color={color}/>
        </div>
    );
};

export default PageLoader;
