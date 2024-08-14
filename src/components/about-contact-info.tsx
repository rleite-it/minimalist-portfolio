import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutContactInfo() {
    return (
        <div className="w-full flex justify-between pr-20 mb-16">
            <h2 className="font-medium text-xl">
                <span>
                    I am thrilled to answer to
                </span>
                <span className="flex items-center">
                    your next project
                    <ArrowRight className="ml-2 flex-shrink-0 size-6" />
                </span>
            </h2>
            <div className="flex flex-col gap-4 pt-4">
                <Link to="mailto:ricardo.leite.developer@gmail.com" className="font-medium text-xl">ricardo.leite.developer@gmail.com</Link>
                <p className="text-sm cursor-pointer">View Resume</p>
            </div>
        </div>
    );
}
