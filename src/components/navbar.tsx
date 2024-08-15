import { Link } from 'react-router-dom';
import NavItem from './nav-item'

const NAV_ITEMS: Array<{
    key: string;
    value: string;
    path: string;
}> = [{
    key: "work",
    value: "Work",
    path: "/"
},
{
    key: "about",
    value: "About",
    path: "/about"
}];

export default function Navbar() {

    return (
        <nav className='py-12 max-w-[1024px] w-full flex justify-between items-baseline select-none'>
            <span className='text-4xl cursor-pointer'><Link to="/">rl.</Link></span>

            <ul className='flex gap-16'>
                {NAV_ITEMS.map((item) => <NavItem key={item.key} item={item.value} path={item.path} />)}
            </ul>
        </nav>
    )
}
