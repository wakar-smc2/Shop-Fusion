import React from 'react'
import { Field, ErrorMessage} from 'formik'
import TextError from './TextError'

export default function Textarea(props ) {
    const { label, name, ...rest }= props
  return (
    <div className="form my-3">
        <label htmlFor={name} >{label}</label>
        <Field className='form-control' as='textarea' id={name} name={name} {...rest}/>
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}
