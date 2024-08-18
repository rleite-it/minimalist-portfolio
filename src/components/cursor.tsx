import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Cursor() {
    const cursorRef = useRef(null);

    useGSAP(() => {
        const cursor = cursorRef.current;

        // Hide the default cursor
        document.body.style.cursor = "none";

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                scale: 3,
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
            });
        };

        window.addEventListener('mousemove', moveCursor);
    }, { dependencies: [cursorRef] })

    return (
        <div
            ref={cursorRef}
            className="fixed top-[-30px] left-[-30px] w-16 h-16 pointer-events-none z-50 mix-blend-difference"
        >
            <svg width="100%" height="100%">
                <circle cx="50%" cy="50%" r="25%" fill="white" />
            </svg>
        </div>
    )
}
