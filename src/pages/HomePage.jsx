import { Download, Mail, Github, Linkedin, BriefcaseBusiness, ChevronLeft, ChevronRight, SquareUserRound, CircleChevronRight, MoveUpRight, FolderOpen } from 'lucide-react';
import { projects } from '@/data/Projects';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export const HomePage = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const lang = i18n.language || window.localStorage.i18nextLng || 'en';

    const MAIL = "bg.pastrana.0901@gmail.com";
    const ICON_SIZE = 28;
    const onClickDownloadPdf = () => {
        const pdfUrl = "public/shared/Curriculum_vitae.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Curriculum"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return (
        <>
            <section className="flex flex-col md:flex-row mt-[50px]">
                <div className='w-full md:w-[70%] pr-5'>
                    <h1 className="text-[2rem] leading-[2.3rem]">{t('mainTitle')}</h1>
                    <p>{t('subTitle')}</p>
                    <div className="mt-5">
                        <button
                            onClick={onClickDownloadPdf}
                            className="flex items-center justify-center rounded-md bg-[#F7DF1E] px-4 py-2 text-black font-bold border border-[#F7DF1E] hover:opacity-90 transition cursor-pointer"
                        >
                            <Download size={16} />
                            <span className="px-2">{t('downloadCv')}</span>
                        </button>
                    </div>
                </div>
                <div className='w-full md:w-[30%] mt-7 md:mt-0'>
                    <img src="image/profile.jpg" alt="Personal image by Bryan García" className='w-full rounded-md' />
                    <ul className="mt-3 flex list-none flex-col gap-3">
                    <li>
                        <a href={`mailto:${MAIL}`} className="flex items-center gap-2 text-[12px]">
                            <Mail size={12} />
                            <span>{MAIL}</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/bgarciacoder" target='_blank' className="flex items-center gap-2 text-[12px]">
                            <Github size={12} />
                            <span>Github</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/bryan-garc%C3%ADa-994b283ab/" target='_blank' className="flex items-center gap-2 text-[12px]">
                            <Linkedin size={12} />
                            <span>Linkedin</span>
                        </a>
                    </li>
                </ul>
                </div>
            </section>
            <section>
                <div className='text-center flex items-center gap-2 text-[1.8rem] mb-[30px]'>
                    <FolderOpen size={ICON_SIZE} />
                    <h1>{t('projectsTitle')}</h1>
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 auto-rows-fr">
                    {
                        projects.map(({ id, date, description, position, company, technologys, link }) => (
                            <Link key={id} to={link} className='flex flex-col gap-1 px-3 border-l border-l-yellow-300'>
                                <div className='flex justify-between'>
                                    <small className='text-[#0d6efd] text-[.875em]'>{date[lang]}</small>
                                    <MoveUpRight size={16} className='text-[#F7DF1E]' />
                                </div>
                                <span className='text-[1.5rem] font-bold'>{position}</span>
                                <span className='text-[1rem] font-bold'>{company}</span>
                                <span className='text-[.875em]'>{description[lang]}</span>
                                <span className='text-[.875em] flex flex-row items-center'><ChevronLeft /> {technologys} <ChevronRight /></span>
                            </Link>
                        ))
                    }
                </div>
            </section>
            <section>
                <div className='text-center flex items-center gap-2 text-[1.8rem] mb-[30px]'>
                    <SquareUserRound size={ICON_SIZE} />
                    <h1>{t('contactTitle')}</h1>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-6 rounded border px-3 py-5 md:grid-cols-2">
                    {/* Columna izquierda */}
                    <div className="flex flex-col gap-3">
                        <a href={`mailto:${MAIL}`} className="flex gap-3">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border"
                            >
                                <Mail size={16} />
                            </div>
                            <div>
                                <span className="block text-sm font-medium">Email</span>
                                <p className="m-0 text-sm">{MAIL}</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/bryan-garc%C3%ADa-994b283ab/" target='_blank' className="flex gap-3">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border"
                            >
                                <Linkedin size={16} />
                            </div>
                            <div>
                                <span className="block text-sm font-medium">Linkedin</span>
                                <p className="m-0 text-sm">Bryan García</p>
                            </div>
                        </a>

                        <a href="https://github.com/BGarciaCoder" target='_blank' className="flex gap-3">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border"
                            >
                                <Github size={16} />
                            </div>
                            <div>
                                <span className="block text-sm font-medium">Github</span>
                                <p className="m-0 text-sm">BGarciaCoder</p>
                            </div>
                        </a>
                    </div>

                    {/* Columna derecha */}
                    <div className="flex flex-col justify-center gap-4">
                        <p className="text-sm">
                            {t('contactText')}
                        </p>

                        <Link
                            to="/contact"
                            className="contact-btn flex items-center justify-center gap-2 text-center border rounded px-4 py-2"
                        >
                            {t('contactButton')}
                            <CircleChevronRight />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}