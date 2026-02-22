import { BriefcaseBusiness, GraduationCap, Brain } from 'lucide-react';
import { experiences } from '@/data/Experience';
import { educations } from '@/data/Education';
import { skills } from '../data/Skills';
import { useTranslation } from 'react-i18next';


export const ResumePage = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const lang = i18n.language || window.localStorage.i18nextLng || 'en';
    const SIZE = 26;

    return (
        <>
            {/* Experince */}
            <section className="text-white block">
                <div className='flex items-center gap-[15px] mb-[25px]'>
                    <div className='relative flex justify-center items-center icon-box'>
                        <BriefcaseBusiness size={SIZE} color='#F7DF1E' />
                    </div>
                    <h3 className='text-[24px]'>{t('experienceTitle')}</h3>
                </div>
                <ol className='text-[15px] block list-decimal timeline-list'>
                    {experiences.map((exp, index) => (
                        <li key={index} className='relative list-none timeline-item'>
                            <h4 className='block h4 timeline-item-title'>
                                {exp.role[lang]}
                                <p className='timeline-text'>{exp.company}</p>
                            </h4>
                            <span className='font-normal leading-[1.6] text-[#F7DF1E]'>{exp.date[lang]}</span>
                            <p className='timeline-text'>{exp.description[lang]}</p>
                        </li>
                    ))}
                </ol>
            </section>
            {/* Education */}
            <section className="text-white block">
                <div className='flex items-center gap-[15px] mb-[25px]'>
                    <div className='relative flex justify-center items-center icon-box'>
                        <GraduationCap size={SIZE} color='#F7DF1E'/>
                    </div>
                    <h3 className='text-[24px]'>{t('educationTitle')}</h3>
                </div>
                <ol className='text-[15px] block list-decimal timeline-list'>
                    {educations.map((edu, index) => (
                        <li key={index} className='relative list-none timeline-item'>
                            <h4 className='block h4 timeline-item-title'>
                                {edu.study[lang]}
                                <p className='timeline-text'>{edu.institution}</p>
                            </h4>
                            <span className='font-normal leading-[1.6] text-[#F7DF1E]'>{edu.date}</span>
                            <p className='timeline-text'>{edu.description[lang]}</p>
                        </li>
                    ))}
                </ol>
            </section>
            {/* My skills */}
            <section className='text-white block'>
                <div className='flex items-center gap-[15px] mb-[25px]'>
                    <div className='relative flex justify-center items-center icon-box'>
                        <Brain size={SIZE} color='#F7DF1E' />
                    </div>
                    <h3 className='text-[24px]'>{t('skillsTitle')}</h3>
                </div>
                {skills.map((skill, index) => (
                    <div key={index} className='mb-1 flex flex-col gap-3'>
                        <h4 className='block h4 timeline-item-title flex items-center gap-2'>
                            {skill.name}
                            <p className='timeline-text'>{skill.level}</p>
                        </h4>
                        <div className='border w-full border-gray-600 rounded-full'>
                            <div className='bg-[#F7DF1E] rounded-full' style={{height:"10px", width: skill.level}}></div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}