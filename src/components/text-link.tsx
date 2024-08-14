import { HTMLAttributes, ReactElement } from "react";

interface TextLinkProps extends HTMLAttributes<HTMLSpanElement> {
    text: string;
    icon?: ReactElement;
    link?: string;
    wip?: boolean;
}

export default function TextLink({ text, icon, link, wip = false, className = "", ...rest }: TextLinkProps) {
    return (
        <span
            data-wip={wip}
            className={`flex items-start underline cursor-pointer font-medium select-none data-[wip=true]:text-zinc-500 ${className}`}
            {...rest}
        >{link ? <a href={link} target="_blank">{text}</a> : text} {icon}</span>
    )
}
