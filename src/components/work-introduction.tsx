import { ArrowDown } from 'lucide-react'

export default function WorkIntroduction() {
    return (
        <div className='flex flex-col gap-20 mr-20'>
            <div className='flex justify-between'>
                <h1 className='max-w-[300px] font-medium text-5xl'>Hello, I'm Ricardo Leite.</h1>
                <span className='pt-12 w-[550px] text-lg text-zinc-500'>A mid-level frontend developer specializing in React, committed to building seamless, user-focused web experiences.</span>
            </div>
            <ArrowDown className='size-9' />
        </div>
    )
}
