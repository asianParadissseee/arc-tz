import {FC, InputHTMLAttributes, memo} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    width: string
}

const Input: FC<InputProps> = memo((props) => {
    const {placeholder, width = "w-52", ...otherProps} = props

    const className = `
                    "bg-gray-50 my-5 ${width} border outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    `
    return (
        <div>
            <input
                placeholder={placeholder}
                className={className}
                {...otherProps}/>
        </div>
    );
});

export default Input;
