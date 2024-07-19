import ReactJS from "@/components/icons/ReactJS.tsx";
import Flask from "@/components/icons/Flask.tsx";
import Django from "@/components/icons/Django.tsx";
import CSS from "@/components/icons/CSS.tsx";
import JavaScript from "@/components/icons/JavaScript.tsx";
import Bootstrap from "@/components/icons/Bootstrap.tsx";
import PostgreSQL from "@/components/icons/PostgreSQL.tsx";
import MySQL from "@/components/icons/MySQL.tsx";
import HTML from "@/components/icons/HTML.tsx";
import Python from "@/components/icons/Python.tsx";
import '@/components/styles/technologies.css'
interface Mapping {
    [key: string]: preact.ComponentChildren;
  }
  /* Map the name of the technology and its icon component */
const mapping: Mapping = {
    Flask: <Flask width="60" height="60"/>,
    Django: <Django width="60" height="60"/>,
    CSS: <CSS width="60" height="60"/>,
    JavaScript: <JavaScript width="60" height="60"/>,
    Bootstrap: <Bootstrap width="60" height="60"/>,
    PostgreSQL: <PostgreSQL width="60" height="60"/>,
    MySQL: <MySQL width="60" height="60"/> ,
    HTML: <HTML width="60" height="60"/>,
    ReactJS: <ReactJS width="60" height="60"/>,
    Python: <Python width="60" height="60"/>,
  }

interface Props{
    technologies: Array<string>
}
export default function Technologies({technologies}: Props){
    return(
        <>
            {technologies.map((c) => (
                <article className="language">
                {mapping[c]}
                <p>{c}</p>
                </article>
            ))}
            </>
    )

}