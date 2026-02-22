import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="mt-5">
            <div className="m-auto w-full md:w-4xl p-5">
                <div className="py-3 text-[.9rem] text-gray-300">{t('developedBy')}</div>
            </div>
        </footer>
    )
}