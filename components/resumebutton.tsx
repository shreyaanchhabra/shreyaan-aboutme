import {Button} from "@/components/ui/button";
import { Download } from "lucide-react";
export default function ResumeButton() {
    return (
        <Button variant = "outline" size = "default" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <a href = "/Shreyaan Resume.pdf" target = "_blank" rel = "noreferrer noopener" download className = "flex items-center gap-2">
                <Download />
                Download Resume
            </a>
        </Button>
    );
}