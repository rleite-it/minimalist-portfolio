import { ReactElement } from "react";

interface TextLinkProps {
    text: string;
    icon?: ReactElement;
    wip?: boolean
}

export default function TextLink({ text, icon, wip = false }: TextLinkProps) {
    return (
        <span data-wip={wip} className="flex items-start underline cursor-pointer font-medium select-none data-[wip=true]:text-zinc-500">{text} {icon}</span>
    )
}
