'use client'

import { useForm } from 'react-hook-form'

import { Form } from '@/app/[lang]/components/Form'
import { InputGroup } from '@/app/[lang]/components/InputGroup'
import { RegisterSchema } from '@/lib/validation/schemas/auth'
import { schemaResolver } from '@/lib/validation/resolver'

export default function Register() {
  const form = useForm({
    resolver: schemaResolver(RegisterSchema)
  })

  const onSubmit = form.handleSubmit(values => {
    console.log({ values })
  })

  return (
    <Form onSubmit={onSubmit} {...form}>
      <InputGroup
        label="Email"
        error={form.formState?.errors?.email?.message}
        {...form.register('email')}
      />
      <InputGroup
        label="Password"
        type="password"
        error={form.formState?.errors?.password?.message}
        {...form.register('password')}
      />
      <button>Register</button>
    </Form>
  )
}
