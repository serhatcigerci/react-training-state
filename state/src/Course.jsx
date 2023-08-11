import React from 'react'
import Angular from './assets/angular.jpg'
import Bootstrap from './assets/bootstrap5.png'
import KompleWeb from './assets/kompleweb.jpg'
import CSharp from './assets/ccsharp.png'
import './Course.css'

const courseMap = {
  KompleWeb,
  Angular,
  Bootstrap,
  CSharp,
}

export const Course = ({ courseName }) => {
  return (
    <div>
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  )
}
