import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); 
    };

    return (
        <div>
            <select
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue="en"
            className='bg-gray-800 outline-none'
            >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ca">Català</option>
            </select>
        </div>
    )
}