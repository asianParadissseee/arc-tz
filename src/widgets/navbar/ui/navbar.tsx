import AppLogo, {Size} from "@/shared/ui/app-logo/ui/app-logo.tsx";
import {Link} from "react-router-dom";

const Navbar = () => {


    const links: Record<string, string>[] = [
        {
            link: "/form",
            content: "Create task"
        },
        {
            link: "/tasks",
            content: "All tasks"
        }

    ]

    return (
        <header
            className={" flex justify-between items-center max-w-full\t px-20 h-[50px] shadow-md bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"}>
            <AppLogo size={Size.XL}/>
            <nav>
                <ul className="flex justify-between items-center gap-4">
                    {links.map(((link, id) => (
                        <li key={id}>
                            <Link className={"text-slate-200"} to={link.link}>{link.content}</Link>
                        </li>
                    )))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
