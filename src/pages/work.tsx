import Projects from '../components/projects'
import WorkIntroduction from '../components/work-introduction'

export default function Work() {
    return (
        <div className='w-[1024px] mt-32'>
            <WorkIntroduction />
            <Projects />
        </div>
    )
}
