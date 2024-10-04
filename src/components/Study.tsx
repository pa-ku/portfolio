import React from 'react'

export default function Study() {
  return (
    <section className='flex flex-col items-center gap-10'>
      <h2 className='text-center w-max border-b-2 border-black text-4xl font-bold'>
        Estudios
      </h2>
      <div className='w-full px-3 md:w-[40em] space-y-6'>
        <div>
          <b>Codo a codo 2.0</b> <span>Full stack developer PHP</span>{' '}
          <span className='text-gray-400'>2023</span>
          <p>
            Curso de 20 semanas dictado por el Ministerio de Educación de la
            Ciudad
          </p>
        </div>
        <div>
          <b>UTN Haedo</b>{' '}
          <span>| Testing manual, ágil y con herramientas</span>
          <span className='text-gray-400'>2023</span>
          <p>
            Curso de 2 meses, 64 horas cátedra. Sobre tipos de pruebas, manuales
            y automatizadas, estrategias de pruebas, debugging QA y QC
          </p>
        </div>
      </div>
    </section>
  )
}
