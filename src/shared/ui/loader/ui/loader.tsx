import {InfinitySpin} from "react-loader-spinner";
import {FC} from "react";

export interface LoaderProps {
    width?: string;
    color?: string;
}

const Loader: FC<LoaderProps> = (props) => {

    const {width = "200", color = "#262fb0"} = props
    return (
        <>
            <InfinitySpin
                width={width}
                color={color}
            />
        </>
    );
};

export default Loader;
