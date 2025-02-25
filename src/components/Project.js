import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { projects } from "../jsons";
import './Project.css';
import axios from 'axios';
import { HashLink } from "react-router-hash-link";
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet'


export default function Project(){
    const { projectname } = useParams();
    const [projectmarkdown, setprojectmarkdown] = useState('');
    const [iserror, seterror] = useState(false);

    const project = projects.find(
        (proj) => updatetovalidurl(proj.title) === projectname
    );

    useEffect(()=>{
        if(project){
           axios.get(`/markdowns/${project.markdown}.md`)
           .then((response)=> setprojectmarkdown(response.data))
           .catch((error)=> console.error('An error getting markdown:', error))
        }else{
            seterror(true)
        }
    }, [project])

    const projectSchema = {
        '@context': 'http://schema.org',
        '@type': 'Article',
        'headline': `${project.title}`,
        'datePublished': `${project.date}`,
        'description': `${project.description}`,
        'author': {
          '@type': 'Person',
          'name': 'Austine Mark',
        },
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `https://austinemark.com/projects/${projectname}`,
          },
        'image': `https://austinemark.com/images/projects${project.image}`,
        'publisher':{
            '@type': 'Person',
            'name': 'Austine Mark'
        }
    }

    return(
        <div className="projectcont">
            <script type="application/ld+json">
            {JSON.stringify(projectSchema)}
            </script>
            <Helmet>
                <title>{project.title}</title>
                <meta name="description" content={project.description}/>
                <meta property='og:title' content={`Austine Mark's ${project.title}`}/>
                <meta property="og:description" content={project.description} />
                <meta property='og:image' content={`https://austinemark.com/images/projects${project.image}`}/>
                <meta property='og:url' content="https://austinemark.com/contact"/>
                <meta property="twitter:title" content={`Austine Mark's ${project.title}`}/>
                <meta property="twitter:description" content={project.description} />
                <meta property="twitter:image" content={`https://austinemark.com/images/projects${project.image}`}/>
            </Helmet>
            {iserror && <div className='projectnotfound'>
                <img src={`${process.env.PUBLIC_URL}/images/notfound.png`} alt='icon'/>
                <h2>404</h2>
                <p>oops! It looks like I'm having trouble finding the project details you were looking for. 
                    This might be because it was removed, deleted or never existed</p>
                <div>
                    <button id='projectnotfound'  onClick={()=>window.location.reload()}>refresh page</button>
                    <HashLink id='projectnotfound' to="/#projects">back to projects</HashLink>
                </div>
            </div>}
            {project && <>
            <div className="projectlinks">
               {project.link === 'none' ? '': <a href={project.link}> <img src={`${process.env.PUBLIC_URL}/images/link.png`} alt='project link'/>  visit project</a>}
               <p>
                {project.github === 'none' ? '': <a href={project.github}> <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt='project link'/> github repo</a>}</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/projects/${project.image}`} alt="project pic" id='projectimage'/>
            <h2>{project.title} | <span>{project.date}</span></h2>
            {projectmarkdown && <div className='project-markdown' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/back5.jpg)`}}>
            <div></div><ReactMarkdown >{projectmarkdown}</ReactMarkdown></div>}
            <div className='shareproject'>
                <h3>Share this project: </h3>
                <div><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://austinemark.com/projects/${projectname}`)}`}>
                <img src={`${process.env.PUBLIC_URL}/images/facebookColored.png`} alt='icon'/>facebook</a>
                <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(project.title)}%20${encodeURIComponent(`https://austinemark.com/projects/${projectname}`)}`}>
                <img src={`${process.env.PUBLIC_URL}/images/whatsappColored.png`} alt='icon'/>whatsapp</a></div>
            </div>
            </>}
        </div>
    )
}



const updatetovalidurl = (inital)=>{
    return inital.replace(/\s+/g, '-').toLowerCase();
}

