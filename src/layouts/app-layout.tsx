import { Suspense } from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Cursor from '../components/cursor'

export default function AppLayout() {
    return (
        <>
            <Cursor />
            <Navbar />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}
