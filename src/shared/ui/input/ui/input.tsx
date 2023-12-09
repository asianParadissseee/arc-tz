import {FC, InputHTMLAttributes, memo} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: FC<InputProps> = memo((props) => {
    const {...otherProps} = props
    return (
        <input {...otherProps}/>
    );
});

export default Input;
