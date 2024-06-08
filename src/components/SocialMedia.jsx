import { useRef } from 'react'
import gitSvg from '../assets/images/icons/github.svg'
import linkedSvg from '../assets/images/icons/linkedin.svg'
import emailSvg from '../assets/images/icons/email.svg'
import ContactModal from './ContactModal'

function SocialIcon({ href, icon, title }) {
  return (
    <a
      className="hover:bg-[var(--blue-200)] cursor-pointer bg-[var(--blue-50)] rounded-full p-1"
      href={href}
      target="_blank"
      title={title}
      rel="noreferrer"
    >
      <img
        className="w-9 h-9 duration-200 "
        src={icon}
        alt={`ìcono ${title}`}
      />
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
      <section className="flex gap-3 ">
        <button
          className="cursor-pointer hover:bg-[var(--blue-200)] bg-[var(--blue-50)] rounded-full p-1 "
          onClick={openModal}
          title="Enviar email"
        >
          <img
            className="w-9 h-9 duration-200 "
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
