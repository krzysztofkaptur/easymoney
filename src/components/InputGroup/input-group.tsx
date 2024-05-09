import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

type Props = {
  id?: string
  label: string
  name: string
  required?: boolean
}

export const InputGroup = (props: Props) => {
  const { id, name, label, required = false } = props

  return (
    <div>
      <Label htmlFor={id ?? name}>{required ? `${label}*` : label}</Label>
      <Input id={id ?? name} name={name ?? name} />
    </div>
  )
}
