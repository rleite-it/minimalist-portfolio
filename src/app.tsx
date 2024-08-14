import { Worker } from "@react-pdf-viewer/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Work from "./pages/work"
import About from "./pages/about"
import AppLayout from "./layouts/app-layout"

import '@react-pdf-viewer/core/lib/styles/index.css';
import Error from "./pages/error";
import Cursor from "./components/cursor";

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
    ],
    errorElement: <Error />
  }
]);

function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <main className="h-screen flex flex-col items-center px-4">
        <Cursor />
        <RouterProvider router={router} />
      </main>
    </Worker>
  )
}

export default App;