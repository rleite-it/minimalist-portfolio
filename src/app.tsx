import { lazy } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/app-layout";
import Cursor from "./components/cursor";

import "@react-pdf-viewer/core/lib/styles/index.css";

const Work = lazy(() => import("./pages/work.tsx"));
const About = lazy(() => import("./pages/about.tsx"));
const Error = lazy(() => import("./pages/error.tsx"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Work />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <main className="h-screen flex flex-col items-center px-4">
        <Cursor />
        <RouterProvider router={router} />
      </main>
    </Worker>
  );
}

export default App;
