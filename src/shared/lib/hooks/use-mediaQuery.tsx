import {useLayoutEffect, useState} from "react";

const queries: string[] = [
    "(max-width: 766px)",
    "(min-width: 766px) and (max-width: 1199px)",
    "(min-width: 1200px)",
];

interface MediaQuery {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

export const useMediaQuery = () => {
    const mediaQueryLists = queries.map((query) => matchMedia(query));
    const getValues = () => mediaQueryLists.map((mql) => mql.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));

        return () => mediaQueryLists.forEach((mql) => mql.removeEventListener("change", handler));
    }, [values]);

    return values.reduce((acc, value, index) => {
        const screen = ["isMobile", "isTablet", "isDesktop"][index] as keyof MediaQuery;
        return {...acc, [screen]: value};
    }, {} as MediaQuery);
};
