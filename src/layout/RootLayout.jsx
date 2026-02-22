import { Outlet } from "react-router-dom"
import { Footer } from "../components/shared/Footer"
import { Navbar } from "../components/shared/Navbar"
import { useTranslation } from 'react-i18next';

export const RootLayout = () => {
    const { t } = useTranslation();

    return (

        <div className="bg-black flex flex-col min-h-screen text-white">
            <Navbar t={t} />

            <main className="mt-15 flex-1 text-white w-full md:w-4xl mx-auto px-5 flex flex-col gap-15 py-[50px]">
                <Outlet />
            </main>

            <Footer />
        </div>

    )
    
}