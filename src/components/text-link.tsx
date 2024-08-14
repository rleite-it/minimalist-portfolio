import { HTMLAttributes, ReactElement } from "react";

interface TextLinkProps extends HTMLAttributes<HTMLSpanElement> {
    text: string;
    icon?: ReactElement;
    wip?: boolean
}

export default function TextLink({ text, icon, wip = false, className = "", ...rest }: TextLinkProps) {
    return (
        <span
            data-wip={wip}
            className={`flex items-start underline cursor-pointer font-medium select-none data-[wip=true]:text-zinc-500 ${className}`}
            {...rest} // Spread the rest of the props to the span element
        >{text} {icon}</span>
    )
}
