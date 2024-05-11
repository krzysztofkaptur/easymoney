'use client'

import { useForm } from 'react-hook-form'

import { Form } from '@/components/Form'
import { InputGroup } from '@/components/InputGroup'

export default function Login() {
  const form = useForm()

  const onSubmit = form.handleSubmit(values => {
    console.log({ values })
  })

  return (
    <Form onSubmit={onSubmit} {...form}>
      <InputGroup label="Email" {...form.register('email')} />
      <InputGroup
        label="Password"
        type="password"
        {...form.register('password')}
      />
      <button>Login</button>
    </Form>
  )
}
