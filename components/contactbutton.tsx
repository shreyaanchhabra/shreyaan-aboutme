import {Button} from "@/components/ui/button";
import { Mail } from "lucide-react";
export default function ContactButton() {
    return (
        <Button variant = "outline" size = "default" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <a href = "mailto:chhabrashreyaan@gmail.com" target = "_blank" rel = "noreferrer noopener" download className = "flex items-center gap-2">
                <Mail />
                Email Me
            </a>
        </Button>
    );
}