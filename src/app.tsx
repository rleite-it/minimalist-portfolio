import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Work from "./pages/work"
import About from "./pages/about"
import AppLayout from "./layouts/app-layout"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Work />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);

function App() {
  return <main className="h-screen flex flex-col items-center px-4">
    <RouterProvider router={router} />
  </main>
}

export default App;