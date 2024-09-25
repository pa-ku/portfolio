import React from 'react'
import Subtitle from './Subtitle'
import SocialMedia from './SocialMedia'

export default function Header() {
  return (
    <>
      <div className='relative pt-20 bg-primary-50  overflow-hidden w-full'>
        <header className=' animate-opacity flex flex-col justify-center items-center'>
          <h1 className='text-7xl text-transparent font-extrabold bg-clip-text bg-gradient-to-t from-gray-500 to-gray-700'>
            Pablo Kuhn
          </h1>
          <Subtitle className='text-4xl'>Full-Stack Developer</Subtitle>

          <p className='text-black text-center w-[30em]'>
            Soy un desarrolador autodidacta que siempre esta buscando aprender
            cosas nuevas, avido Padelero 🥎 Ciclista 🚴‍♂️ Guitarrista 🎸 y
            apasionado acampante 🏕️
          </p>

          <div className='pt-1'>
            <SocialMedia />
          </div>
        </header>
          <svg
            width='2120'
            height='150'
            fill='none'
            viewBox='0 0 5120 456'
            preserveAspectRatio='none'
          >
            <path
              fill='#fff'
              d='M2641.4 401.5C2613.31 399.999 2525.75 198 2121.01 198C1862 198 1840 264.5 1806.88 259.5C1773.77 254.499 1723.34 129.991 1562.17 136C1401 142.009 1366.58 313.5 1339 321C1311.42 328.5 1279 226.5 1034.79 234.5C802.99 242.093 724.297 318.5 697 313C669.703 307.5 681 75.9996 430.496 32.4996C214.304 -5.042 99.7464 183.937 60.6394 266.475C51.4353 285.9 27.9703 295.392 8.5729 286.129C-15.3473 274.705 -43 292.144 -43 318.652V429.5C-43 443.859 -31.3592 455.5 -16.9999 455.5H5103C5127.3 455.5 5147 435.8 5147 411.5V232.89C5147 226.643 5146.46 220.404 5144.55 214.457C5136.92 190.729 5108.7 128.5 5022.5 128.5C4881 128.5 4935 253.704 4838.83 249C4808.16 247.499 4757.27 55.5004 4535 59C4312.73 62.4996 4283.98 270.5 4250.5 268.5C4217.02 266.5 4197 199 4037.27 189.5C3834.76 177.455 3790.86 285 3753.5 279C3716.14 273 3652.96 98.8238 3377.5 153.5C3156.46 197.374 3191.5 387.48 3139.82 376.5C3118.64 371.999 3078.5 339 2948.03 339C2894.2 339 2890.37 330.676 2837.19 339C2708.5 359.141 2669.5 403 2641.4 401.5Z'
            ></path>
          </svg>
     
      </div>
    </>
  )
}
