import { getDictionary } from '@/lib/i18n/get-dictionary'

import { LoginContent } from './sections'

import type { LoginPageProps } from './types'

export default async function Login({ params: { lang } }: LoginPageProps) {
  const t = await getDictionary(lang)

  return <LoginContent t={t.login} />
}
