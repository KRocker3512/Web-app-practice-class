import React from 'react'
import "typeface-roboto"
import FormGroup from "@mui/material/FormGroup"
import MyTextInput from '../Component/MyTextInput'
import MySelect from '../Component/MySelect'

export default function App() {
  return (
    <FormGroup style={{width: 200, margin: 10}}>
        <MyTextInput/>
        <MySelect/>
    </FormGroup>
  )
}