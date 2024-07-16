import { useState, useEffect } from 'preact/hooks';
import { getI18N } from '@/i18n';
import DOMPurify from 'isomorphic-dompurify';
import Button from '@/components/Button'
import ProjectCard from '@/components/ProjectCard';


interface Props {
    currentLocale?: string;
    // messages?: Array<{name: string, description: string, technologies: Array<string>, images:Array<string>, github: string, deploy: string}>;
    gallery?: preact.ComponentChildren;
    github?: preact.ComponentChildren;
    deploy?: preact.ComponentChildren;
  };
  export default function Proyectos({currentLocale = 'es', gallery, github, deploy}: Props) {
    const [count, setCount] = useState(3);
    const i18n = getI18N({ currentLocale })["projects"];
    const total = i18n.detail.length;
    const text = DOMPurify.sanitize(i18n.detail[0].description)
    return (

        <section id="projects">
          <h1 className="heading"> {i18n.title} </h1>
          <ProjectCard currentLocale={currentLocale} project={i18n.detail[0]} gallery={gallery} github={github} deploy={deploy} >
          </ProjectCard>
          {(total - count) >= 0 && <Button text={i18n.gallery} onClick={() => setCount(count + 3)}></Button>}
      
        </section>
    )
}