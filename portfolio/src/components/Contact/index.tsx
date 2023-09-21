import './style.scss'
import Translator from '../I18n/Translator'
import linkedinIcon from '/linkedin-contact-icon.svg'
import emailIcon from '/email-contact-icon.svg'
import codeIcon from '/code-bg-icon.svg'
import reactIcon from '/react-bg-icon.svg'
import { useState } from 'react'

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = () =>{
    navigator.clipboard.writeText('luizlopes12@outlook.com')
    .then(() =>{
      setEmailCopied(true)
      setTimeout(() => {
        setEmailCopied(false)
      }, 5000);
    })
  }

  return (
    <section className='contact__section-container' id="contact">
      <img className='code__bg-icon1' src={codeIcon} />

      <h1 className="contact__section-title">
        <Translator path="contact" />
      </h1>
      <p className='contact__section-subtitle'>
        <Translator path='likeItContactMe'/>
      </p>
      <div className="contact__methods">
          <a href="https://www.linkedin.com/in/luizlopes12/" target='_blank'>
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <button onClick={handleCopyEmail}>
            {emailCopied && (<span className='copied__popup'><Translator path='copiedToTransfer'/></span>)}
            <img src={emailIcon} alt="Email" />
          </button>
      </div>
      <img className='react__bg-icon1' src={reactIcon} />
      <img className='react__bg-icon2' src={reactIcon} />

    </section>
  )
}

export default Contact