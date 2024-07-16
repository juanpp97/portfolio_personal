import { useState, useEffect } from 'preact/hooks';
import Button from '@/components/Button'
import Pill from '@/components/Pill'
import DOMPurify from 'isomorphic-dompurify';
import Flask from '@/components/icons/Flask'
import Django from '@/components/icons/Django'
import PostgreSQL from '@/components/icons/PostgreSQL'
import Bootstrap from '@/components/icons/Bootstrap'
import JavaScript from '@/components/icons/JavaScript'
import CSS from '@/components/icons/CSS'
import { getI18N } from '@/i18n';

import '@/components/styles/card.css'

interface Mapping {
    [key: string]: preact.ComponentChildren;
  }
  /* Map the name of the technology and its icon component */
  const mapping: Mapping = {
    Flask: <Flask/>,
    Django: <Django/>,
    CSS: <CSS/>,
    JavaScript: <JavaScript/>,
    Bootstrap: <Bootstrap/>,
    PostgreSQL: <PostgreSQL/>,
  }

interface Props {
    currentLocale?: string;
    project: {cover: string, name: string, description: string, tech: Array<string>, images:Array<string>, github: string, deploy: string};
    gallery: preact.ComponentChildren;
    github: preact.ComponentChildren;
    deploy: preact.ComponentChildren;
  };

export default function ProjectCard({currentLocale = 'es', project, gallery, github, deploy}: Props){
    return (
    <article class="project__card">
        <picture class="card__image">
            <img src={project.cover} alt="" className={"cover"} />
        </picture>
        <div class="card__content">
            <p className={"content__name"}>{project.name}</p>

            <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(project.description)}}> </p>   

            <div className={"technologies"}>

            {project.tech.map((c) => (
                <Pill text={c} icon={mapping[c]}/>
            ))}

            </div>

            <div className="buttons">

                <Button text={ getI18N({ currentLocale })["projects"].gallery}> {gallery} </Button>

                <Button text='Github'> {github} </Button>

                <Button text='Deploy'> {deploy} </Button>

            </div>
        </div>
    </article>
    )
}