import {Link} from "react-router-dom";
import {FC} from "react";

export enum Size {
    XS = "text-xs",
    SM = " text-sm",
    XL = "text-xl"
}

interface AppLogoProps {
    size?: Size
}

const AppLogo: FC<AppLogoProps> = (props) => {
    const {size} = props
    return (
        <div>
            <Link to={"/"} className={`${size}  text-slate-200  font-extrabold`}>Arc Todo</Link>
        </div>
    );
};

export default AppLogo;
