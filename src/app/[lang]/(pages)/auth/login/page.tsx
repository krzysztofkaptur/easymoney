import { getDictionary } from '@/lib/i18n/get-dictionary'

import { LoginContent } from './sections'

import type { Locale } from '@/lib/i18n'

type Props = {
  params: { lang: Locale }
}

export default async function Login({ params: { lang } }: Props) {
  const t = await getDictionary(lang)

  return <LoginContent t={t.login} />
}
