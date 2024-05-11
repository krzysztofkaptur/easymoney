'use client'

import { useForm } from 'react-hook-form'

import { Form } from '@/components/Form'
import { InputGroup } from '@/components/InputGroup'
import { LoginSchema } from '@/lib/validation/schemas/auth'
import { schemaResolver } from '@/lib/validation/resolver'
import { successToast } from '@/lib/toasts'

export default function Login() {
  const form = useForm({
    resolver: schemaResolver(LoginSchema)
  })

  const onSubmit = form.handleSubmit(values => {
    successToast('This is sparta')
    console.log({ values })
  })

  return (
    <>
      <Form onSubmit={onSubmit} {...form}>
        <InputGroup
          label="Email"
          {...form.register('email')}
          error={form.formState?.errors?.email?.message}
        />
        <InputGroup
          label="Password"
          type="password"
          {...form.register('password')}
        />
        <button>Login</button>
      </Form>
    </>
  )
}
