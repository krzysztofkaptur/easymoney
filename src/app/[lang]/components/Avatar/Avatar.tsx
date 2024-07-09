import {
  Avatar as UiAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/[lang]/components/ui'

export const Avatar = () => {
  return (
    <UiAvatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </UiAvatar>
  )
}
