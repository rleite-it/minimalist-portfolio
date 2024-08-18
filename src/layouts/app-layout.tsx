import { Suspense } from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Loading from '../pages/loading'
import GoToTop from '../components/go-to-top'

export default function AppLayout() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
            <Footer />
            <GoToTop />
        </>
    )
}
