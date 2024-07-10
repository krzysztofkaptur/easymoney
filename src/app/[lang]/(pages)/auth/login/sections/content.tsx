'use client'

import { useForm } from 'react-hook-form'

import { Form, InputGroup } from '@/components'
import { LoginSchema } from '@/lib/validation/schemas/auth'
import { schemaResolver } from '@/lib/validation/resolver'

import { type getDictionary } from '@/lib/i18n/get-dictionary'

export const LoginContent = ({
  t,
}: {
  t: Awaited<ReturnType<typeof getDictionary>>['login']
}) => {
  const form = useForm({
    resolver: schemaResolver(LoginSchema),
  })

  const onSubmit = form.handleSubmit((values) => {
    console.log({ values })
  })

  return (
    <Form onSubmit={onSubmit} {...form}>
      <InputGroup
        label={t.email}
        {...form.register('email')}
        error={form.formState?.errors?.email?.message}
      />
      <InputGroup
        label={t.password}
        type='password'
        {...form.register('password')}
      />
      <button>{t.submitBtn}</button>
    </Form>
  )
}
