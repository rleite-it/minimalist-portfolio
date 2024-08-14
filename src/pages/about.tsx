import AboutContactInfo from '../components/about-contact-info'
import AboutIntroduction from '../components/about-introduction'

export default function About() {
    return (
        <div className='w-[1024px] mt-32 flex flex-col flex-1 gap-16'>
            <AboutIntroduction />
            <div className="mt-20 h-[.25px] bg-[#181717]" />
            <AboutContactInfo />
        </div>
    )
}
