'use client'

import { InputGroup } from '@/components/InputGroup'

import { Form } from '@/components/Form'

import { useForm } from 'react-hook-form'

export default function Home() {
  const form = useForm()

  const onSubmit = form.handleSubmit(values => {
    console.log({ values })
  })

  return (
    <main>
      <Form onSubmit={onSubmit} {...form}>
        <InputGroup label="Email" {...form.register('email')} />
        <InputGroup
          label="Password"
          type="password"
          {...form.register('password')}
        />
        <button>Suasdf</button>
      </Form>
    </main>
  )
}
