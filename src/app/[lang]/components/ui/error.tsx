import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

type Props = {
  error?: string
}

export const Error = ({ error }: Props) => {
  return <span>{error}</span>
}
