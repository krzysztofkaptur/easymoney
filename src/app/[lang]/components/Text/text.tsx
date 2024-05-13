import { ReactNode } from 'react'

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type Props = {
  children: ReactNode
  variant?: TextVariant
  className?: string
}

export const Text = (props: Props) => {
  const { children, variant = 'p', className } = props

  const Tag = `${variant}` as keyof JSX.IntrinsicElements

  return <Tag className={className}>{children}</Tag>
}
