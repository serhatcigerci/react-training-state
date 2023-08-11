import React from 'react'
import Angular from './assets/angular.jpg'
import Bootstrap from './assets/bootstrap5.png'
import CSharp from './assets/ccsharp.png'
import KompleWeb from './assets/kompleweb.jpg'

const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  CSharp: CSharp,
  KompleWeb: KompleWeb
}

export const Course = ({ courseName }) => {
  return (
    <div>
      <img src={courseMap[courseName]} alt="" />
    </div>
  )
}
