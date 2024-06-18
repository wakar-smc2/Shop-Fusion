import React from 'react'
import { Field, ErrorMessage} from 'formik'
import TextError from './TextError'
 
export default function Input(props) {
    const { label, name, ...rest }= props
  return (
    <div className='form my-3'>
        <label htmlFor={name} >{label}</label>
        <Field className="form-control" id={name} name={name} {...rest}/>
        <ErrorMessage name={name} component={TextError}/>
      
    </div>
  )
}
