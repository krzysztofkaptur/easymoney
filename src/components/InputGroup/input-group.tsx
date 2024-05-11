import { ForwardedRef, forwardRef } from 'react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

type Props = {
  id?: string
  label: string
  name: string
  required?: boolean
  type?: React.HTMLInputTypeAttribute
}

const InputGroup = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { id, name, label, type = 'text', required = false, ...rest } = props

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
      </div>
    )
  }
)

InputGroup.displayName = 'InputGroup'

export { InputGroup }
