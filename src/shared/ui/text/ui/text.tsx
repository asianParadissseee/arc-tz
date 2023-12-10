import {FC, JSX, ReactNode} from "react";

interface TextProps {
    children?: ReactNode
    isError?: boolean;
    isHeader?: boolean
    tag?: string;
    isCenter?: boolean
}


const Text: FC<TextProps> = (props) => {

    const {tag = "p", isError, isHeader = false, children, isCenter, ...otherProps} = props

    const Tag = tag as keyof JSX.IntrinsicElements
    const className = `text-indigo py-5 ${isCenter ? "flex justify-center items-center" : ""} ${
        isHeader ? 'text-2xl font-bold mb-4' : isError ? 'text-red-500' : 'text-gray-800'
    }`;
    return (
        <Tag className={className} {...otherProps}>
            {children}
        </Tag>
    );
};

export default Text;
