import { db } from '@/lib/db'
import { todos } from '@/lib/db'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Text } from '@/app/[lang]/components/Text'

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
      <Text variant='span' className='text-5xl'>
        Dupa
      </Text>
      <h1>{t.home.title}</h1>
    </main>
  )
}
