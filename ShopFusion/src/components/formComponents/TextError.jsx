import React from 'react'

export default function TextError(props) {
  return (
    <div className='text-danger'>
        {props.children}
    </div>
  )
}
