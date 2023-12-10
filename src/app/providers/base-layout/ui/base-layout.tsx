import {FC, Fragment, ReactNode} from "react";
import {Navbar} from "@/widgets/navbar";
import {Footer} from "@/widgets/footer";

interface BaseLayoutProps {
    children?: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = (props) => {
    const {children} = props
    return (
        <Fragment>
            <Navbar/>
            <main className={"container px-20 min-h-screen\t"}>
                {children}
            </main>
            <Footer/>
        </Fragment>
    );
};

export default BaseLayout;
