import {ButtonHTMLAttributes, FC, memo, ReactNode} from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

const Button: FC<ButtonProps> = memo((props) => {

    const {children, ...otherProps} = props
    return (
        <button className={""} {...otherProps}>
            {children}
        </button>
    );
});

export default Button;
