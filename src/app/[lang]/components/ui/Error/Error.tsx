type Props = {
  error: string
}

export const Error = ({ error }: Props) => {
  return <span>{error}</span>
}
