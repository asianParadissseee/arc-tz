import {ButtonHTMLAttributes, FC, memo, ReactNode} from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

const Button: FC<ButtonProps> = memo((props) => {

    const {children, ...otherProps} = props
    return (
        <button className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 rounded text-white p-3" {...otherProps}>
            {children}
        </button>
    );
});

export default Button;
