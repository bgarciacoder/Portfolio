import { AlignJustify } from 'lucide-react'
import { NavLink } from 'react-router-dom';
import { navbarLinks } from '@/constants/Links';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { X } from 'lucide-react';

export const Navbar = ({ t }) => {

    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className='fixed w-full bg-[black] z-100'>
            <section className='bg-[#333A3D]'>
                <div className='mx-auto px-5 py-1 w-full md:w-4xl flex gap-5'>
                    <small>{t("translationText")}</small>
                    <LanguageSwitcher />
                </div>
            </section>
            <section className="mx-auto flex flex-row justify-between px-5 w-full md:w-4xl">
                <div className="flex flex-col py-2">
                    <span className="text-[16px] font-semibold text-white">
                        Bryan García
                    </span>
                    <span className="text-[10px] text-[#F7DF1E]">
                        Full Stack Developer
                    </span>
                </div>

                {/* Botón menú móvil */}
                <button
                    type="button"
                    className="block md:hidden text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    { mobileOpen ? <X /> : <AlignJustify /> }
                </button>
                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="absolute top-full w-full border-t border-border bg-[black] px-6 pb-6 md:hidden z-100">
                        <ul className="flex flex-col gap-4 pt-4">
                            {navbarLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                to={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                onClick={() => setMobileOpen(false)}
                                >
                                    {t(link.name)}
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Navegación desktop */}
                <nav className="hidden md:block mt-auto">
                    <ul className="flex list-none gap-3">
                        {
                            navbarLinks.map(({ id, name, href }) => (
                                <li key={id} className="py-3">
                                    <NavLink to={href} className={"text-white hover:text-gray-300 transition"}>
                                        {t(name)}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </section>
        </header>
    )
}