import React from 'react'
import { FormWrapper } from './FormWrapper'

const CredentialsFormProps = {
  password: string,
  confirmPassowrd: string,
  pin: string,
  confirmPin: string,
  userName: string,
}


const CredentialsForm: React.FC<CredentialsFormProps> = () => {
  return (
    <FormWrapper>
      <div>CredentialsForm</div>
    </FormWrapper>
  )
}


export default CredentialsForm