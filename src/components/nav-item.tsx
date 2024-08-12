import { NavLink } from "react-router-dom";

interface NavItemProps {
    item: string;
    path: string;
}

export default function NavItem({ item, path }: NavItemProps) {
    return (
        <li>
            <NavLink
                to={path}
                className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "font-medium underline" : " font-medium"
                }
            >
                {item}
            </NavLink>
        </li>
    )
}
