import React, { useState } from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  color: #111;
  background-color: aquamarine;
  border: 0px 2px 2px 0px;
  border-radius: 10px;
  transition: 200ms;
  &:hover{
  background-color: #fff;
  }
`

export default function test() {
  const [status, setStatus] = useState('Ready to code')

  function mosqueready() {
    setStatus(!status)
    console.log('Piggy ready')
  }

  return (
    <>
      <button className='ready-btn' onClick={mosqueready}></button>
      <Title>{status}</Title>
    </>
  )
}
