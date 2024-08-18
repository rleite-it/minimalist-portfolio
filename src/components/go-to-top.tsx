import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUp } from 'lucide-react';

import getScrollbarPercentage from '../utils/scollPercentage';

export default function GoToTop() {
    const divRef = useRef<HTMLDivElement | null>(null);
    console.log(getScrollbarPercentage());

    const handleScroll = () => {
        if (getScrollbarPercentage() >= 30) {
            gsap.to(divRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.2
            })

            return;
        }

        gsap.to(divRef.current, {
            opacity: 0,
            scale: 0.75,
            duration: 0.2
        })
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div ref={divRef} className='fixed bottom-5 right-5 size-12 bg-zinc-950 rounded-lg flex items-center justify-center cursor-pointer opacity-0 scale-75' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <ArrowUp className='text-white size-7' />
        </div>
    )
}
