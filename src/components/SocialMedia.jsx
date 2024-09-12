import { useRef } from 'react'
import gitSvg from '../assets/images/icons/github.svg'
import linkedSvg from '../assets/images/icons/linkedin.svg'
import emailSvg from '../assets/images/icons/email.svg'
import ContactModal from './ContactModal'
import cvSvg from '../assets/svg/cv.svg'
import codepenSvg from '../assets/svg/codepen.svg'
import pdf from '../../public/cv_pablokuhn.pdf'
function SocialIcon({ href, icon, title }) {
  return (
    <a
      className='relative flex items-center justify-center p-1 rounded-full cursor-pointer hover:bg-secondary-50  group stroke-slate-400'
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <span className=' absolute px-3 text-white duration-150 rounded-md opacity-0 pointer-events-none -bottom-7 group-hover:opacity-100 bg-slate-400  w-max h-max '>
        {title}
      </span>
      <img className='w-9 h-9 ' src={icon} alt={`ìcono ${title}`} />
    </a>
  )
}

export default function SocialBar() {
  const modalRef = useRef(null)

  function openModal() {
    if (!modalRef.current) {
      return
    }
    modalRef.current.hasAttribute('open')
      ? modalRef.current.close()
      : modalRef.current.showModal()
  }

  return (
    <>
      <ContactModal modalRef={modalRef} />
      <section className='flex gap-3 '>
        <button
          className='p-1 rounded-full cursor-pointer hover:bg-secondary-50 group flex items-center justify-center relative'
          onClick={openModal}
          title='Enviar email'
        >
          <span className=' absolute px-3 text-white duration-150 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 bg-slate-400  -bottom-7 w-max h-max '>
            Contacto
          </span>
          <img className='w-9 h-9 ' src={emailSvg} alt='icono email' />
        </button>

        <SocialIcon
          href={'https://github.com/pa-ku?tab=repositories'}
          icon={gitSvg}
          title={'Github'}
        />
        <SocialIcon
          href={'https://www.linkedin.com/in/pablokuhn/'}
          icon={linkedSvg}
          title={'LinkedIn'}
        />

        <SocialIcon href={pdf} icon={cvSvg} title={'Curriculum'} />
      </section>
    </>
  )
}
