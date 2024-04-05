import React from 'react'

export default function useObserver({}) {
  const observer = new IntersectionObserver((entries) => {
    console.log(entries)
  })

  return { observer }
}
