import React from 'react'
import './style.scss'
import githubIcon from '/github-projicon.svg'
import siteIcon from '/site-projicon.svg'
import { useTranslation } from 'react-i18next'
import Translator from '../I18n/Translator'

const ProjectCard = ({
    project
}: any) => {
    const { t } = useTranslation()
  return (
    <div className='project__card'>
        <figure className='project__big-img'>
            <img src={project.desktopImage} alt="Image" />
        </figure>
        <figure className='project__small-img'>
            <img src={project.mobileImage} alt="Image" />
        </figure>
        <div className="project__details">
            <h4 className="project__title">
                {project.title}
            </h4>
            <div className='project__details-wrapper'>
                <p className='project__description'>
                    {t(project.description)}
                </p>
                <div className="project__actions">
                    <a href={project.githubLink} target='_blank'>
                        <img src={githubIcon} alt="Website" />

                        <Translator path='repository'/>
                    </a>
                    <a href={project.siteLink} target='_blank'>
                        <img src={siteIcon} alt="Website" />
                        <Translator path='site'/>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProjectCard