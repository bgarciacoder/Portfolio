import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "../layout/RootLayout";
import { HomePage, ResumePage, ContactPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "resume",
                element: <ResumePage />
            },
            {
                path: "contact",
                element: <ContactPage />
            }
        ]
    }
]);