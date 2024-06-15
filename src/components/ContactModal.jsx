import { useRef } from 'react'
import { useState } from 'react'

export default function ContactModal({ modalRef }) {
  const [copy, setCopy] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const statusModal = useRef(null)

  function copyEmail() {
    navigator.clipboard.writeText('p4blo.kuhn@gmail.com')
    if (!copy) {
      setCopy(true)
      setTimeout(() => {
        setCopy(false)
      }, 2000)
    }
  }

  let data = {
    service_id: 'service_yfhitjq',
    template_id: 'template_pesbs2k',
    user_id: 'gSf4MzUMv9qYbQjGG',
    template_params: {
      email: email,
      message: message,
    },
  }

  function isValidForm() {
    return (
      email && message && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)
    )
  }

  function sendForm({}) {
    if (isValidForm()) {
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log('El correo ha sido enviado exitosamente')
            setStatusOk(true)
          } else {
            console.error('Hubo un error al enviar el correo' + response.status)
          }
        })
        .catch((error) => {
          console.error('Hubo un error de red:', error)
        })

      modalRef.current.close()
      setEmail('')
      setMessage('')

      if (!statusModal.current) {
        return
      }
      statusModal.current.hasAttribute('open')
        ? statusModal.current.close()
        : statusModal.current.showModal()
      setTimeout(() => {
        statusModal.current.close()
      }, 2000)
    } else {
    }
  }

  return (
    <>
      <ConfirmModal statusModal={statusModal} />

      <dialog
        ref={modalRef}
        className="right-0 left-0 m-auto z-50 bg-pink-50 rounded-lg w-full md:w-[35em]"
      >
        <div className="flex gap-2 flex-col items-start py-3 px-4   ">
          <form method="dialog" className="flex w-full gap-2 flex-col">
            <div className="p-1 flex w-full justify-between items-center">
              <h2 className="text-2xl text-gray-700">Contacto</h2>
              <button
                className="relative group duration-100 w-7 h-7 flex items-center justify-end text-pink-500  hover:text-pink-400"
                onClick={() => modalRef.current.close()}
              >
                <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                    fill="currentColor"
                    strokeWidth="0"
                  />
                </svg>
              </button>
            </div>
            <input
              className="rounded-md text-lg w-full py-2 px-3"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={email}
              placeholder="tu email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="w-full rounded-md h-60 text-lg py-2 px-3"
              type="text"
              value={message}
              placeholder="hola paku!"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              onClick={sendForm}
              type="submit"
              className="bg-pink-500 hover:bg-pink-400 duration-100 text-white w-full rounded-md py-2"
            >
              Enviar
            </button>
          </form>
          <span className="text-gray-700 flex flex-col items-center justify-center w-full">
            <button
              className="flex hover:text-pink-700"
              title="Copiar email"
              onClick={copyEmail}
            >
              p4blo.kuhn@gmail.com
              {copy ? (
                <>
                  <span className="">
                    <svg
                      className="text-pink-700 "
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                      <path d="M11 14l2 2l4 -4" />
                    </svg>
                  </span>
                </>
              ) : (
                <svg
                  className="text-pink-700 "
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                  <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                </svg>
              )}
            </button>
          </span>
        </div>
      </dialog>
    </>
  )
}

function ConfirmModal({ statusModal }) {
  return (
    <>
      <dialog
        ref={statusModal}
        className="z-10 top-0 left-0 right-0 m-auto px-7 py-6 rounded-md"
      >
        <h2 className="text-xl flex flex-col justify-center items-center">
          Correo enviado!
          <svg
            className="text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            width="50px"
            height="50px"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
        </h2>
      </dialog>
    </>
  )
}
