import spanish from '@/i18n/es.json';
import english from '@/i18n/en.json';

const LANG = {
    SPANISH: 'es',
    ENGLISH: 'en'
}


export const getI18N = ({
	currentLocale = 'es',
}: {
	currentLocale: string | undefined;
}) => {
    if(currentLocale == LANG.ENGLISH) return english;
    return spanish
};