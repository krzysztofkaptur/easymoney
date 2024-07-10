import { ForwardedRef, forwardRef } from 'react'

import { Label, Input, Error } from '@/ui'

import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

type Props = {
  id?: string
  label: string
  name: string
  required?: boolean
  type?: React.HTMLInputTypeAttribute
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

const InputGroup = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      id,
      name,
      label,
      type = 'text',
      required = false,
      error,
      ...rest
    } = props

    return (
      <div>
        <Label htmlFor={id ?? name}>{required ? `${label}*` : label}</Label>
        <Input
          ref={ref}
          id={id ?? name}
          name={name ?? name}
          type={type}
          {...rest}
        />
        {error ? <Error error={error as string} /> : null}
      </div>
    )
  }
)

InputGroup.displayName = 'InputGroup'

export { InputGroup }
