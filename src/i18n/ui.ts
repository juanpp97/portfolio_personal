import Spain from '@/components/icons/Spain.astro';
import USA from '@/components/icons/USA.astro';


export const languages: Record<
string,
{ code: string; name: string; flag: typeof Spain }
> = {
  en: {
    code: 'EN',
    name: 'English',
    flag: USA,

  },
  es: {
    code: 'ES',
    name: 'Español',
    flag: Spain,

  },    
};
export const defaultLang = 'es';
export const showDefaultLang = false;


export const ui = {
  en: {
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.tech': 'Technologies',
    'nav.about': 'About me',
    'nav.resume': 'Download Resume',
    'btn.contact': 'Contact',

  },
  es: {
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.tech': 'Tecnologías',
    'nav.about': 'Sobre mi',
    'nav.resume': 'Descargar CV',
    'btn.contact': 'Contacto',
  },
} as const;