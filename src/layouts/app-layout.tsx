import { Suspense } from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
        </>
    )
}
