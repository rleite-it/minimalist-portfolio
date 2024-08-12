import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Work from "./pages/work"
import About from "./pages/about"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Work />
  },
  {
    path: "/about",
    element: <About />
  }
])

function App() {
  return <main>
    <RouterProvider router={router} />
  </main>
}

export default App
