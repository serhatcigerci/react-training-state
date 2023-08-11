import React from 'react'
import Angular from './assets/angular.jpg'
import Bootstrap from './assets/bootstrap5.png'
import CSharp from './assets/ccsharp.png'
import KompleWeb from './assets/kompleweb.jpg'



export const Course = ({ courseName }) => {
  console.log(courseName)
  return (
    <div>
      <img src={Angular} alt="" />
    </div>
  )
}
