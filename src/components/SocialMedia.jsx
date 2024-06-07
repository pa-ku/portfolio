import { useRef } from 'react'
import gitSvg from '../assets/images/icons/github.svg'
import linkedSvg from '../assets/images/icons/linkedin.svg'
import emailSvg from '../assets/images/icons/email.svg'
import ContactModal from './ContactModal'

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
      <section className="flex gap-3">
        <button
          className="cursor-pointer"
          onClick={openModal}
          title="Enviar email"
        >
          <img
            className="w-10 h-10 duration-200 hover:scale-110"
            src={emailSvg}
            alt="icono email"
          />
        </button>

        <SocialIcon
          href={'https://github.com/pa-ku?tab=repositories'}
          icon={gitSvg}
          title={'github'}
        />
        <SocialIcon
          href={'https://www.linkedin.com/in/pablokuhn/'}
          icon={linkedSvg}
          title={'linkedIn'}
        />
      </section>
    </>
  )
}

function SocialIcon({ href, icon, title }) {
  return (
    <a
      className="cursor-pointer"
      href={href}
      target="_blank"
      title={title}
      rel="noreferrer"
    >
      <img
        className="w-10 h-10 duration-200 hover:scale-110"
        src={icon}
        alt={`ìcono ${title}`}
      />
    </a>
  )
}
