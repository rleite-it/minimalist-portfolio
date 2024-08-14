import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mt-28 static py-11 w-[1024px] min-h-16 flex items-center justify-between text-[15px]">
            <span className="text-zinc-500">Design credits - <Link to="https://www.figma.com/@feyza" className="underline transition-colors hover:text-zinc-950" target="_blank">Feyza Okumus</Link></span>
            <ul className="flex gap-16 font-semibold">
                <li>
                    <Link target="_blank" to="https://github.com/rleite-it">
                        Github
                    </Link>
                </li>
                <li>
                    <Link target="_blank" to="https://www.linkedin.com/in/ricardo-leite-it/">
                        Linkedin
                    </Link>
                </li>
            </ul>
        </footer>
    )
}
