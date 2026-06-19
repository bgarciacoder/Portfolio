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
                <div className='w-full md:w-[70%] pr-[7rem]'>
                    <h1 className="text-[2rem] leading-[2.3rem]">{t('mainTitle')}</h1>
                    <p className="text-[1rem] text-gray-300 mt-5">{t('subTitle')}</p>
                    <div className="mt-10">
                        <button
                            onClick={onClickDownloadPdf}
                            className="flex items-center justify-center rounded-md bg-[#F7DF1E] px-4 py-2 text-black font-bold border border-[#F7DF1E] hover:opacity-90 transition cursor-pointer"
                        >
                            <Download size={16} />
                            <span className="px-2">{t('downloadCv')}</span>
                        </button>
                    </div>
                    <div className="mt-5 flex gap-3">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3d3d3d] cursor-pointer"
                        >
                            <img src="image/mail.png" className="h-6 w-6" alt="Logotype from gmail" />
                        </div>
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3d3d3d] cursor-pointer"
                        >
                            <img src="image/linkedin.png" className="h-6 w-6" alt="Logotype from linkedin" />
                        </div>
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3d3d3d] cursor-pointer"
                        >
                            <img src="image/github.png" className="h-6 w-6" alt="Logotype from github" />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[30%] mt-7 md:mt-0'>
                    <img src="image/profile.jpg" alt="Personal image by Bryan García" className='w-full rounded-md border border-[#3d3d3d]' />
                    <div className="flex flex-col items-center pt-7">
                        <span className="text-[16px] font-semibold text-white">
                            Bryan García
                        </span>
                        <span className="text-[10px] text-[#F7DF1E]">
                            Full Stack Developer
                        </span>
                    </div>
                    {/* <ul className="mt-3 flex list-none flex-col gap-3">
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
                    </ul> */}
                </div>
            </section>
            <section>
                <div className='text-center flex items-center gap-2 text-[1.8rem] mb-[30px]'>
                    <FolderOpen size={ICON_SIZE} />
                    <h1>{t('projectsTitle')}</h1>
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 auto-rows-fr">
                    {
                        projects.map(({ id, date, description, position, company, technologys, technologyIcons, link, image }) => (
                            <Link key={id} to={link} className='flex flex-col gap-1 px-3 border-l border-l-yellow-300'>
                                <img src={image} alt={company} className='w-full h-auto rounded mb-3 border border-[#3d3d3d]' />
                                <div className='flex justify-between'>
                                    <small className='text-[#0d6efd] text-[.875em]'>{date[lang]}</small>
                                    <MoveUpRight size={16} className='text-[#F7DF1E]' />
                                </div>
                                <span className='text-[1.5rem] font-bold'>{position}</span>
                                <span className='text-[1rem] font-bold'>{company}</span>
                                <span className='text-[.875em] mb-5'>{description[lang]}</span>
                                <span className='text-[.875em] flex flex-row items-center gap-2 mt-auto'>
                                    {
                                        technologyIcons.map((icon, index) => (
                                            <img key={index} src={icon} alt={icon} className='w-10 h-10 mx-1' />
                                        ))
                                    }
                                </span>
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
                <div className="mt-5 grid grid-cols-1 gap-6 rounded border border-[#3d3d3d] px-3 py-5 md:grid-cols-2">
                    {/* Columna izquierda */}
                    <div className="flex flex-col gap-3">
                        <a href={`mailto:${MAIL}`} className="flex gap-3">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3d3d3d]"
                            >
                                <img src="image/mail.png" className="h-6 w-6" alt="Logotype from gmail" />
                            </div>
                            <div>
                                <span className="block text-sm font-medium">Email</span>
                                <p className="m-0 text-sm">{MAIL}</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/bryan-garc%C3%ADa-994b283ab/" target='_blank' className="flex gap-3">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3d3d3d]"
                            >
                                <img src="image/linkedin.png" className="h-6 w-6" alt="Logotype from linkedin" />
                            </div>
                            <div>
                                <span className="block text-sm font-medium">Linkedin</span>
                                <p className="m-0 text-sm">Bryan García</p>
                            </div>
                        </a>

                        <a href="https://github.com/BGarciaCoder" target='_blank' className="flex gap-3">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#3d3d3d]"
                            >
                                <img src="image/github.png" className="h-6 w-6" alt="Logotype from github" />
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
                            className="contact-btn flex items-center justify-center gap-2 text-center border border-[#3d3d3d] rounded px-4 py-2"
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