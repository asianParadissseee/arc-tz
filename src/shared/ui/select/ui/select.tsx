import {FC, SelectHTMLAttributes} from "react";


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {

}

const Select: FC<SelectProps> = (props) => {
    const {} = props
    return (
        <select>

        </select>
    );
};

export default Select;
