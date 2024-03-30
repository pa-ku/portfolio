import React, { useState } from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.`

`

const ModalImage = styled.img`

`

type ModalProps ={
  imgAlt?:string
  image?:any
  children?:any
}

export default function Modal({children,image,imgAlt}:ModalProps) {
const [openModal, setOpenModal] = useState(false)


  return (<ModalWrapper>
    {children}
    <ModalImage src={image} alt={imgAlt} />
    </ModalWrapper>)
}
