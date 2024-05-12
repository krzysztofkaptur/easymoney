'use client'

import { useForm } from 'react-hook-form'

import { Form } from '@/app/[lang]/components/Form'
import { InputGroup } from '@/app/[lang]/components/InputGroup'
import { LoginSchema } from '@/lib/validation/schemas/auth'
import { schemaResolver } from '@/lib/validation/resolver'
import { successToast } from '@/lib/toasts'

import { type getDictionary } from "@/lib/i18n/get-dictionary";

export const LoginContent = ({
  t,
}: {
  t: Awaited<ReturnType<typeof getDictionary>>["login"];
}) => {
  const form = useForm({
    resolver: schemaResolver(LoginSchema)
  })

  const onSubmit = form.handleSubmit(values => {
    successToast('This is sparta')
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
        type="password"
        {...form.register('password')}
      />
      <button>{t.submitBtn}</button>
    </Form>
  )
}
