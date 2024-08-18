import { Link } from "react-router-dom";
import { GITHUB_LINK, LINKEDIN_LINK } from "../constants/socials";

export default function Footer() {
  return (
    <footer className="mt-28 static py-11 w-[1024px] min-h-16 flex items-center justify-between text-[15px]">
      <span className="text-zinc-500">
        Design credits -{" "}
        <Link
          to="https://www.figma.com/@feyza"
          className="underline transition-colors hover:text-zinc-950"
          target="_blank"
        >
          Feyza Okumus
        </Link>
      </span>
      <ul className="flex gap-16 font-semibold">
        <li>
          <Link target="_blank" to={GITHUB_LINK}>
            Github
          </Link>
        </li>
        <li>
          <Link target="_blank" to={LINKEDIN_LINK}>
            Linkedin
          </Link>
        </li>
      </ul>
    </footer>
  );
}
