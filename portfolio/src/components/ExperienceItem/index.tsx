import './style.scss'
import Translator from '../I18n/Translator'


interface IExperienceItemProps{
    company: string;
    title: string;
    status: string;
    description: string;
}

const ExperienceItem = (props: IExperienceItemProps) => {
  return (
    <div className='experience__item-container'>
        <h3 className="experience__item-company">
            {props.company}
        </h3>
        <h4 className='experience__item-job'>
            <Translator path={props.title} />
            <span className="experience__item-job-status">
            (<Translator path={props.status} />)
            </span>
        </h4>
        <p className='experience__item-desc'>
            <Translator path={props.description} />
        </p>
    </div>
  )
}

export default ExperienceItem