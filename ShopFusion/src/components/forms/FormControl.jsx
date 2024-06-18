import React from 'react'
import Input from '../formComponents/Input'
import Textarea from '../formComponents/Textarea'
import Select from '../formComponents/Select'
import RadioButtons from '../formComponents/RadioButtons'
import CheckboxGroup from '../formComponents/CheckboxGroup'


export default function FormControl(props) {
    const {control, ...rest} = props
    switch(control){
        case 'input': return (<Input {...rest} />)
        case 'textarea': return (<Textarea {...rest}/>)
        case 'select': return (<Select {...rest} />)
        case 'radio': return (<RadioButtons {...rest} />)
        case 'checkbox': return (<CheckboxGroup {...rest}/>)
        case 'date':
        default : return null
    }
  return (
    <div>
      
    </div>
  )
}
