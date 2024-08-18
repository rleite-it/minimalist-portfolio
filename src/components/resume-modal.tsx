import { useEffect } from "react";
import Rodal from "rodal";
import { Viewer } from "@react-pdf-viewer/core";

import 'rodal/lib/rodal.css';

interface ResumeModalProps {
    visible: boolean;
    onClose: () => void;
}

export default function ResumeModal({ visible, onClose }: ResumeModalProps) {

    useEffect(() => {
        if (visible) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";

        // Cleanup function to restore overflow when the component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [visible]);

    return (
        <Rodal visible={visible} onClose={onClose} width={1024} height={window.innerHeight - 20} showCloseButton={false} closeOnEsc>
            <Viewer fileUrl="./resume.pdf" />
        </Rodal>
    );
}
