import { useRef } from 'react';
import Projects from '../components/projects'
import WorkIntroduction from '../components/work-introduction'

export default function Work() {
    const projectsRef = useRef<any>(null);

    const handleScroll = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollToTarget();
        }
    };

    return (
        <div className='w-[1024px] mt-32'>
            <WorkIntroduction onScrollToTarget={handleScroll} />
            <Projects ref={projectsRef} />
        </div>
    )
}
