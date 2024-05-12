import { ReactNode } from 'react'

import { Form as FormUI } from '@/app/[lang]/components/ui/form'
import { FieldValues, UseFormReturn } from 'react-hook-form'

type Props = {
  children: ReactNode
  onSubmit: () => void
}

export const Form = (
  props: Props & UseFormReturn<FieldValues, any, undefined>
) => {
  const { children, onSubmit, ...rest } = props

  return (
    <FormUI {...rest}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormUI>
  )
}
