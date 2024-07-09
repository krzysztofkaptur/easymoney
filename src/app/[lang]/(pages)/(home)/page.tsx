import { db } from '@/lib/db'
import { todos } from '@/lib/db'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import {
  Avatar,
  Badge,
  Checkbox,
  Combobox,
  DropdownMenu,
  FAQ,
  Image,
  Modal,
  Text,
} from '@/app/[lang]/components'

import type { Locale } from '@/lib/i18n'

type Props = {
  params: { lang: Locale }
}

export default async function Home({ params: { lang } }: Props) {
  const data = await db.select().from(todos)
  const t = await getDictionary(lang)

  console.log(data)

  return (
    <main>
      <Image src='/images/next.svg' alt='' width={100} height={20} />
      <Text variant='h1'>{t.home.title}</Text>
      <Modal />
      <FAQ />
      <Avatar />
      <Badge />
      <Checkbox />
      <Combobox />
      <DropdownMenu />
    </main>
  )
}
